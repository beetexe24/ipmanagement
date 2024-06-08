import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export default function Login()
{
    interface Data{
        email: string,
        password: string
    }

    const [credentials, setCredentials] = useState<Data>({email: '', password: ''});
    const [errors, setErrors] = useState<string>('');

    const updateCredentials = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials,[e.target.name] : e.target.value});  
    }

    const login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.get("/sanctum/csrf-cookie").then(() => {
            axios.post('/api/authenticate', credentials)
            .then(response => {
                    if(response.data.success)
                    {
                        localStorage.setItem("auth-token", response.data.token);
                        localStorage.setItem("auth-email", response.data.email);
                        localStorage.setItem("auth-name", response.data.name);
                        window.location.href = "/dashboard?page=1";
                    }
                    else
                    {
                        setErrors(response.data.message);
                    }
                });
        });
    }

    return (
        <div className="w-full flex flex-col min-h-screen p-5 md:p-10">
            <div className="w-full m-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                
                <form className="space-y-6" onSubmit={login}>
                    <div className="w-full text-center">
                        <img src="./images/logo.png" className="h-8 m-auto" alt="IP Address" />
                        <h5 className="text-xl font-medium text-gray-900">IP Address Management</h5>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" onChange={updateCredentials} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                        <input type="password" onChange={updateCredentials} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500">
                        Not registered? <Link to="/create-account" className="text-blue-700 hover:underline">Create account</Link>
                    </div>
                    <div className="text-center mb-2">
                        <p className="text-md font-semibold text-red-700 whitespace-pre-line">{errors}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}