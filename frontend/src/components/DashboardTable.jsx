import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { DeleteModal } from "./DeleteModal";
import { useState } from "react";
import { EditModal } from "./EditModal";
import { useFetch } from "../customHooks/useFetch.js";
import { Loading } from "./Loading.jsx";
import { ErrorBoundary } from "../pages/ErrorBoundary.jsx";

export const DashboardTable = () => {
  //const url = "http://localhost:3000/";
  //const { isLoading, isError } = useFetch(url);
  const [del, setDel] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleShowDel = () => setDel(true);
  const handleCloseDel = () => setDel(false);

  const handleDelete = () => {
    if (del) {
      const deleteData = async () => {
        const results = await fetch("http://localhost:3000/delete", {
          method: "DELETE",
        });
        const responseJson = await results.json();
        console.log(responseJson);
      };
      setDel(false);
      deleteData();
      console.log("deleted");
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
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Status</th>
            <th>Packages</th>
            <th>Actions</th>
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
              <button className="btn btn-primary" onClick={handleShow}>
                <FaRegEdit />
              </button>
              <button className="btn btn-danger" onClick={handleShowDel}>
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
      <EditModal show={show} handleClose={handleClose} />
    </>
  );
};
