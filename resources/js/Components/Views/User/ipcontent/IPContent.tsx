import React from "react";

export default function IPContent({data, openHistories, openIPupdate})
{
    return data.length > 0?
    (
        
        <tbody>
        {data.map((row:any, index:number) => (
            <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {row.ipaddress}
                </td>
                <td className="px-6 py-4">
                    {row.label}
                </td>
                <td className="px-2 py-4">
                    <i className="fa-regular fa-pen-to-square cursor-pointer" onClick={() => {openIPupdate(row.id, row.ipaddress, row.label)}}></i>
                </td>
                <td className="px-2 py-4">
                    <i className="fa-regular fa-note-sticky cursor-pointer" onClick={() => {openHistories(row.id)}}></i>
                </td>
            </tr>
        ))}
        </tbody>
    )
    :
    (
        <tbody>
            <tr>
                <td scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap">
                No data
                </td>
            </tr>
        </tbody>
    )
}