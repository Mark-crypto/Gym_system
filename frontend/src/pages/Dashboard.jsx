import { useState } from "react";
import { AdminNav } from "../components/AdminNav";
import { AddModal } from "../components/AddModal";
import { DashboardTable } from "../components/DashboardTable";
import "../index.css";
import { IoMdAddCircleOutline } from "react-icons/io";

export const Dashboard = () => {
  const [add, setAdd] = useState(false);

  const handleAddMember = () => setAdd(true);

  return (
    <>
      <AdminNav />
      <div className="dashboard-btn">
        <button className="btn btn-primary" onClick={handleAddMember}>
          <IoMdAddCircleOutline className="dashboard-icon" />
          &nbsp;
          <b>Add New Member</b>
        </button>
      </div>
      <AddModal add={add} setAdd={setAdd} />
      <DashboardTable />
    </>
  );
};
