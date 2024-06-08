import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import APIrequest from "../../../APIrequest";
import Modalcreateaccount from "./Modals/Modalcreateaccount";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

export default function Createaccount()
{
    interface data{
        name: string,
        email: string,
        password: string,
        password_confirmation: string
    }

    const [credentials, setCredentials] = useState<data>({name: '', email: '', password: '', password_confirmation: ''});
    const [errors, setErrors] = useState<string>('');
    const [openModalcreateaccount, setOpenModalcreateaccount] = useState<boolean>(false);

    useEffect(()=> {
        
    }, []);

    const updateCredentials = (e:ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [e.target.name] : e.target.value});
    }

    const createaccount = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        APIrequest
        .post("/create-account", credentials)
        .then((response) => {
            if(response.data.success)
            {
                setOpenModalcreateaccount(true);
            }
            else
            {
                let entryError = response.data.errors;
                var errors = '';
                for (const property in entryError) {
                    errors += "• " + entryError[property] + "\n";
                }
                setErrors(errors);
            }
        })
        .catch((error) => {

        })
    }

    return (
        <div className="w-full flex flex-col min-h-screen p-5 md:p-10">
            <Modalcreateaccount 
                openModalcreateaccount={openModalcreateaccount}
                setOpenModalcreateaccount={setOpenModalcreateaccount}
            />
            
            <div className="w-full m-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                <div className="w-full text-center mb-10">
                    <p className="text-4xl">Create account</p>
                </div>
                <div className="text-left mb-2">
                    <p className="text-md font-semibold text-red-700 whitespace-pre-line">{errors}</p>
                </div>
                <form className="max-w-sm mx-auto" onSubmit={createaccount}>
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                        <input type="textbox" onChange={updateCredentials} id="name" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Type your name" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" onChange={updateCredentials} id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Type your email" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                        <input type="password" onChange={updateCredentials} id="password" name="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900">Repeat password</label>
                        <input type="password" onChange={updateCredentials} id="password_confirmation" name="password_confirmation" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>

                    <div className="w-full text-center">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register new account</button>
                        <Link to="/login">
                            <button type="submit" className="text-gray-500 mt-3 bg-white border-solid border-2 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center">Go back to login</button>
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    )
}