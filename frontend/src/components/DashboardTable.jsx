import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { DeleteModal } from "./DeleteModal";
import { useState } from "react";
import { EditModal } from "./EditModal";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export const DashboardTable = () => {
  //const url = "http://localhost:3000/";
  //const { isLoading, isError } = useFetch(url);
  const [del, setDel] = useState(false);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState([]); //should not be empty

  const handleShow = () => {
    setShow(true);
    try {
      const fetchData = async () => {
        const res = await axios("/dashboard");
        console.log(res.data);
        setEdit(res.data);
      };
      //fetchData();
    } catch (error) {
      toast.error(error.response.data);
    }
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
          const response = await axios.delete("/delete");
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
          <tr>
            <td style={{ color: "black", fontWeight: "bold" }}>1</td>
            <td style={{ color: "red", fontWeight: "bold" }}>
              {/* {data.fname || "Mark"} */}
              Mark
            </td>
            <td style={{ color: "red", fontWeight: "bold" }}>
              {/* {data.lname || "Otto"} */}
              Otto
            </td>
            <td style={{ color: "blue", fontWeight: "bold" }}>
              {/* {data.email || "test@test.com"} */}
              test@test.com
            </td>
            <td style={{ color: "orange", fontWeight: "bold" }}>
              {/* {data.number || "0712345678"} */}
              0712345678
            </td>
            <td style={{ color: "green", fontWeight: "bold" }}>
              {/* {data.status || "active"} */}
              active
            </td>
            <td style={{ color: "green", fontWeight: "bold" }}>
              {/* {data.package || "Weight lifting"} */}
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
          </tr>
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
