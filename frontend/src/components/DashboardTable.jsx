import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { DeleteModal } from "./DeleteModal";
import { useState } from "react";
import { EditModal } from "./EditModal";

export const DashboardTable = () => {
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
            <td style={{ color: "red", fontWeight: "bold" }}>Mark</td>
            <td style={{ color: "red", fontWeight: "bold" }}>Otto</td>
            <td style={{ color: "blue", fontWeight: "bold" }}>
              otto@gmail.com
            </td>
            <td style={{ color: "orange", fontWeight: "bold" }}>25412345678</td>
            <td style={{ color: "green", fontWeight: "bold" }}>Active</td>
            <td style={{ color: "green", fontWeight: "bold" }}>
              Weight Lifting
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
