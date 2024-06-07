import React, { useEffect, useState } from "react";
import IPcontentSkeleton from "./IPcontentSkeleton";
import IPContent from "./IPContent";
import APIrequest from "../../../APIrequest";
import IPpagination from "./IPpagination";
import { initFlowbite } from "flowbite";
import Modaladd from "./Modaladd";


export default function Index()
{
    useEffect(() => {
        initFlowbite();

        const urlParams = new URLSearchParams(window.location.search);
        const page = (isNaN(parseInt(urlParams.get('page')!))) ? 1 : parseInt(urlParams.get('page')!);

        setCurrentPage(page);

        async function fetchData(){
            await Promise.all([
                getIPaddresses(page)
            ])
        }

        fetchData();
    }, []);

    interface Data{
        ipaddress: string,
        label: string
    }
    const [ipdata, setIPdata] = useState<Data[]>([]);
    const [displaySkeleton, setDisplaySkeleton] = useState<string>('relative');
    const [openModalHistories, setOpenModalHistories] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [openModalAdd, setOpenModalAdd] = useState(false);



    const getIPaddresses = (page:number) =>
    {
        let endpoint = `/?page=${page}`;

        // UPDATE THE URL
        window.history.replaceState(null, "New Page Title", endpoint);
        
        APIrequest.get(endpoint)
        .then((response) => {
            if(response.data.success)
            {
                setIPdata(response.data.data.data);
                setTotalPages(response.data.data.last_page);
            }

            setTimeout(() => {
                setDisplaySkeleton('none');
            }, 500)
        })
        .catch((error) => {
            console.log(error);
            setTimeout(() => {
                setDisplaySkeleton('none');
            }, 500)
        })
    }

    function onCloseModalAdd() {
        setOpenModalAdd(false);
    }

    function add_new_ipaddress()
    {
        
    }

    return (
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
                <Modaladd 
                openModalAdd={openModalAdd}
                onCloseModalAdd={onCloseModalAdd}
                add_new_ipaddress={add_new_ipaddress}
                />
                <div>
                    <button type="button" onClick={() => setOpenModalAdd(true)} className="float-right mb-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">NEW IP ADDRESS</button>
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
                            
                        {
                            (displaySkeleton == 'relative') ? 
                                <IPcontentSkeleton />
                            :
                                <IPContent data={ipdata} openHistories={openModalHistories} />
                        }
                        
                    </table>
                </div>
                <div className="w-full text-center">
                    <IPpagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                        changePage={getIPaddresses}
                    />
                </div>
                
        </div>
    )
}