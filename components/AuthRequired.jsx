import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired() {
  const authenicated = false;

  if (!authenicated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
