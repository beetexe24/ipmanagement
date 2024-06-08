import React, { useEffect, useState } from "react";
import APIrequest from "../../APIrequest";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Side()
{
    const [Selected, setSelectedData] = useState<string | null>('myapplication');

    useEffect(() => {
        getCurrentLocation();
    })

    const getCurrentLocation = () => {
        let currentLocation = window.location.href;
        let data = currentLocation.split("/");
        let tab = data[3];
        
        if(tab.includes("dashboard"))
        {
            currentLocation = 'dashboard';
        }
        updateSelected(currentLocation);
    }

    const updateSelected = (click: string) => {
        setSelectedData(click);
    }

    const Logout = () => {
        APIrequest
            .post("/logout")
            .then((response) => {
                localStorage.removeItem("auth-token");
                window.location.href = "/login";
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                        <img src="./images/logo.png" className="h-8 mr-3" alt="IP Address" />
                        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">IP Address Management</span>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ml-3">
                            <div>
                            <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src="./images/user.png" alt="user photo"/>
                            </button>
                            </div>
                            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow" id="dropdown-user">
                            <div className="px-4 py-3" role="none">
                                <p className="text-sm text-gray-900" role="none">
                                {localStorage.getItem("auth-name")}
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate" role="none">
                                {localStorage.getItem("auth-email")}
                                </p>
                            </div>
                            <ul className="py-1" role="none">
                                <li>
                                    <span onClick={Logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" role="menuitem">Sign out</span>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link style={{ color: (Selected == 'dashboard') ? '#1A56DB' : '#1E1F1C' }} to="/dashboard?page=1" className="flex items-center p-2 rounded-lg group">
                            <svg className="w-5 h-5 text-gray-500 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                            </svg>
                            <span className="ml-3">Dashboard</span>
                            </Link>
                        </li>
                        {/* <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg group">
                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                            </svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">New</span>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </aside>

            
        </div>
    );
}