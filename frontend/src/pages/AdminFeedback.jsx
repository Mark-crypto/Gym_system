import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { AdminNav } from "../components/AdminNav";
import Table from "react-bootstrap/Table";

export const AdminFeedback = () => {
  const [feedbacks, setFeedbacks] = useState({});
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios("http://localhost:5000/admin-feedback");
        setFeedbacks(response.data);
      };
      fetchData();
      //toast.success("It works perfectly");
    } catch (error) {
      toast.error(error.response.data);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <AdminNav />
      <Table hover>
        <thead>
          <tr>
            <th style={{ fontWeight: "bold" }}></th>
            <th style={{ fontWeight: "bold" }}>Full Name</th>
            <th style={{ fontWeight: "bold" }}>Email</th>
            <th style={{ fontWeight: "bold" }}>Number</th>
            <th style={{ fontWeight: "bold" }}>Message</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback, index) => {
            return (
              <tr key={feedback._id}>
                <td style={{ color: "black", fontWeight: "bold" }}>
                  {index + 1}
                </td>
                <td style={{ color: "red", fontWeight: "bold" }}>
                  {feedback.name}
                </td>
                <td style={{ color: "green", fontWeight: "bold" }}>
                  {feedback.email}
                </td>
                <td style={{ color: "blue", fontWeight: "bold" }}>
                  {feedback.number}
                </td>
                <td style={{ color: "black", fontWeight: "bold" }}>
                  {feedback.message}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
