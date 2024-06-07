import React from "react";
import IPcontentSkeleton from "./IPcontentSkeleton";


export default function Index()
{
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div>
                    <button type="button" className="float-right mb-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">NEW IP ADDRESS</button>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 w-40">
                                    IP ADDRESS
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    LABEL
                                </th>
                                <th scope="col" className="px-2 py-3 w-10">
                                            
                                </th>
                            </tr>
                        </thead>
                            
                        <IPcontentSkeleton />
                    </table>
                </div>
                
            </div>
        </div>
    )
}