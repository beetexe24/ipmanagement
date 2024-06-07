import React from "react";

export default function SuccessEntry({displaySuccessEntry})
{
    return (
        <div style={{ display: displaySuccessEntry }} className="absolute top-0 m-auto p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <span className="font-medium">Successfully added!</span>
        </div>
    )
}