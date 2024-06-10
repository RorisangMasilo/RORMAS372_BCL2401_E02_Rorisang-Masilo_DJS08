import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired() {
  const authenticated = false;

  if (!authenticated) {
    return (
      <Navigate to="/login" state={{ message: "you must log in first" }} />
    );
  }
  return <Outlet />;
}
