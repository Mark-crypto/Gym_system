import React from "react";
import Table from "react-bootstrap/Table";

export const Dashboard = () => {
  return (
    <>
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
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>otto@gmail.com</td>
            <td>25412345678</td>
            <td>Active</td>
            <td>
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
