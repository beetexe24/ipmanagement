import { Pagination } from "flowbite-react";
import React from "react";

export default function IPpagination({currentPage, totalPages, setCurrentPage, changePage})
{
    const onPageChange = (page: number) => {
        setCurrentPage(page);
        changePage(page);
    }
    return (
        <div className="mt-10 mb-10">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
        </div>
    )
}