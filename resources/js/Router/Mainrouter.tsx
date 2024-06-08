import React from "react";
import { Route, Routes } from "react-router";
import Master from "../Components/Layouts/User/Master";
import Index from "../Components/Views/User/ipcontent/Index";
import Login from "../Components/Views/User/Auth/Login";
import NotFound from "../Components/Views/NotFound";
import AuthMiddleware from "../Middleware/AuthMiddleware";
import Createaccount from "../Components/Views/User/Auth/Createaccount";

export default function Mainrouter()
{
    return (
        <Routes>
            <Route element={<AuthMiddleware />}>
                <Route path="/" element={<Master />}>
                    <Route path="/dashboard" element={<Index />} />
                </Route>
            </Route>

            <Route>
                <Route path="/login" element={<Login />} />
                <Route path="/create-account" element={<Createaccount />} />
            </Route>

            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}