import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { DeleteModal } from "./DeleteModal";
import { useEffect, useState } from "react";
import { EditModal } from "./EditModal";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export const DashboardTable = () => {
  //const url = "http://localhost:3000/";
  //const { isLoading, isError } = useFetch(url);
  const [del, setDel] = useState(false);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState([]);
  const [members, setMembers] = useState([]);

  //Fetch all data
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios("http://localhost:5000/dashboard");
      console.log(resp.data);
      setMembers(resp.data);
    };
    fetchData();
  }, []); //edit, add, delete

  // Fetch single user for edit and display on modal
  const handleShow = (id) => {
    const fetchData = async () => {
      const resp = await axios(`http://localhost:5000/dashboard/${id}`);
      console.log(resp.data);
      setEdit(resp.data);
    };
    fetchData();
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const handleShowDel = () => setDel(true);
  const handleCloseDel = () => {
    setDel(false);
    toast.warn("You have cancelled the operation", { position: "top-center" });
  };

  const handleDelete = () => {
    if (del) {
      try {
        const deleteData = async () => {
          const response = await axios.delete(
            "http://localhost:5000/dashboard"
          );
          if (response.status === 200) {
            console.log("deleted");
          }
        };
        //deleteData();
        setDel(false);
        toast.success("You have successfully deleted a record", {
          position: "top-center",
        });
      } catch (error) {
        toast.error(error.response.data);
      }
    }
  };

  // if (isLoading) {
  //   return (
  //     <>
  //       {" "}
  //       <Loading />{" "}
  //     </>
  //   );
  // }
  // if (isError) {
  //   return (
  //     <>
  //       <ErrorBoundary />
  //     </>
  //   );
  // }
  return (
    <>
      <ToastContainer />
      <Table hover>
        <thead>
          <tr>
            <th style={{ fontWeight: "bold" }}>#</th>
            <th style={{ fontWeight: "bold" }}>First Name</th>
            <th style={{ fontWeight: "bold" }}>Last Name</th>
            <th style={{ fontWeight: "bold" }}>Email</th>
            <th style={{ fontWeight: "bold" }}>Number</th>
            <th style={{ fontWeight: "bold" }}>Status</th>
            <th style={{ fontWeight: "bold" }}>Packages</th>
            <th style={{ fontWeight: "bold" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => {
            return (
              <tr key={member._id}>
                <td style={{ color: "black", fontWeight: "bold" }}>
                  {index + 1}
                </td>
                <td style={{ color: "red", fontWeight: "bold" }}>
                  {member.fname}
                </td>
                <td style={{ color: "red", fontWeight: "bold" }}>
                  {member.lname}
                </td>
                <td style={{ color: "blue", fontWeight: "bold" }}>
                  {member.email}
                </td>
                <td style={{ color: "orange", fontWeight: "bold" }}>
                  {member.number}
                </td>
                <td style={{ color: "green", fontWeight: "bold" }}>
                  {member.status}
                </td>
                <td style={{ color: "green", fontWeight: "bold" }}>
                  {member.packages}
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleShow(member._id)}
                    style={{ width: "50px" }}
                  >
                    <FaRegEdit />
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => handleShowDel(member._id)}
                    style={{ width: "50px" }}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td style={{ color: "black", fontWeight: "bold" }}>1</td>
            <td style={{ color: "red", fontWeight: "bold" }}>Mark</td>
            <td style={{ color: "red", fontWeight: "bold" }}>Otto</td>
            <td style={{ color: "blue", fontWeight: "bold" }}>test@test.com</td>
            <td style={{ color: "orange", fontWeight: "bold" }}>0712345678</td>
            <td style={{ color: "green", fontWeight: "bold" }}>active</td>
            <td style={{ color: "green", fontWeight: "bold" }}>
              weight lifting
            </td>
            <td>
              <button
                className="btn btn-primary"
                onClick={handleShow}
                style={{ width: "50px" }}
              >
                <FaRegEdit />
              </button>
              &nbsp;
              <button
                className="btn btn-danger"
                onClick={handleShowDel}
                style={{ width: "50px" }}
              >
                <RiDeleteBin6Line />
              </button>
            </td>
          </tr> */}
        </tbody>
      </Table>
      <DeleteModal
        del={del}
        handleCloseDel={handleCloseDel}
        handleDelete={handleDelete}
      />
      <EditModal
        show={show}
        handleClose={handleClose}
        edit={edit}
        setShow={setShow}
      />
    </>
  );
};
