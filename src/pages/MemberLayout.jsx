import React from "react";
import { Outlet } from "react-router-dom";

const MemberLayout = () => {
  return (
    <div className="flex bg-gray-50">
      <div className="w-1/4" />
      <div className="w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default MemberLayout;
