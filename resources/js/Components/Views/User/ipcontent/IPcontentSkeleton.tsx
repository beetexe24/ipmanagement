import React from "react";

export default function IPcontentSkeleton()
{
    return (
        <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
                <td scope="row" className="animate-pulse px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <div className="h-2 bg-gray-200 rounded-full"></div>
                </td>
                <td className="animate-pulse px-6 py-4">
                    <div className="h-2 bg-gray-200 rounded-full"></div>
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
                <td scope="row" className="animate-pulse px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <div className="h-2 bg-gray-200 rounded-full"></div>
                </td>
                <td className="animate-pulse px-6 py-4">
                    <div className="h-2 bg-gray-200 rounded-full"></div>
                </td>
            </tr>
        </tbody>
    )
    
}