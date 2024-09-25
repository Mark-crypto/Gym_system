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
        const response = await axios("/feedback");
        setFeedbacks(response.data);
        console.log(response.data);
      };
      //fetchData();
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
            <th style={{ fontWeight: "bold" }}>#</th>
            <th style={{ fontWeight: "bold" }}>Full Name</th>
            <th style={{ fontWeight: "bold" }}>Email</th>
            <th style={{ fontWeight: "bold" }}>Number</th>
            <th style={{ fontWeight: "bold" }}>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ color: "black", fontWeight: "bold" }}>1</td>
            <td style={{ color: "red", fontWeight: "bold" }}>Mark Juma</td>
            <td style={{ color: "green", fontWeight: "bold" }}>
              test@test.com
            </td>
            <td style={{ color: "blue", fontWeight: "bold" }}>0712345678</td>
            <td style={{ color: "black", fontWeight: "bold" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              dicta excepturi autem repellendus deserunt quisquam eveniet, minus
              magnam neque id cumque vero delectus earum ipsum provident
              expedita iusto odio? Ipsum.
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
