import React from "react";

export default function IPcontentSkeleton()
{
    return (
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" className="animate-pulse px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </td>
                <td className="animate-pulse px-6 py-4">
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" className="animate-pulse px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </td>
                <td className="animate-pulse px-6 py-4">
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </td>
            </tr>
        </tbody>
    )
    
}