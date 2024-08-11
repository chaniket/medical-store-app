import React from "react";
import { Outlet } from "react-router-dom";
import AddBillHeader from "./AddBillHeader";

const AddBillRoute = () => {
  return (
    <>
     
      <AddBillHeader />
      <Outlet />
    </>
  );
};

export default AddBillRoute;
