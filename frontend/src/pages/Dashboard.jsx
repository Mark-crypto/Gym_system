import { useState } from "react";
import { AdminNav } from "../components/AdminNav";
import { AddModal } from "../components/AddModal";
import { DashboardTable } from "../components/DashboardTable";

export const Dashboard = () => {
  const [add, setAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleOpen = () => setAdd(true);

  return (
    <>
      <AdminNav />
      <h4>Admin Dashboard</h4>
      <button className="btn btn-primary" onClick={handleOpen}>
        Add user
      </button>
      <AddModal add={add} setAdd={setAdd} />
      <DashboardTable />
    </>
  );
};
