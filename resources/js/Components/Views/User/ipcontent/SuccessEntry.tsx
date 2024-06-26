import React from "react";

export default function SuccessEntry({displaySuccessEntry})
{
    return (
        <div style={{ display: displaySuccessEntry }} className="absolute top-0 m-auto p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
            <span className="font-medium">Success!</span>
        </div>
    )
}