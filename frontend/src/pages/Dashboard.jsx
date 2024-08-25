import React from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { AdminNav } from "../components/AdminNav";

export const Dashboard = () => {
  const [users, setUsers] = useState({});
  const [feedback, setFeedback] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  return (
    <>
      <AdminNav />
      <h4>Admin Dashboard</h4>
      <button className="btn btn-primary">Add user</button>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Status</th>
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
            <td>
              <button className="btn btn-primary">
                <FaRegEdit />
              </button>
              <button className="btn btn-danger">
                <RiDeleteBin6Line />
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
