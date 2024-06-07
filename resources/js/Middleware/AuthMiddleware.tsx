import React from "react";
import { Navigate, Outlet } from "react-router";

const AuthMiddleware = () => {
    const token = localStorage.getItem("auth-token");

    return token ? <Outlet /> : <Navigate to="/login" />
}

export default AuthMiddleware;