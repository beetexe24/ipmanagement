import Axios from "axios";
import { Navigate } from "react-router";

const APIrequest = Axios.create({
    baseURL: "/api",
    headers: { Authorization: `Bearer ${localStorage.getItem("auth-token")}`},
    withCredentials: true
});

APIrequest
    .get("/user")
    .then((response) => {

    })
    .catch((e) => {
        if(e.response.data.message === "Unauthenticated.")
        {
            localStorage.removeItem("auth-token");
            //<Navigate to="/login" />;
        }
    })