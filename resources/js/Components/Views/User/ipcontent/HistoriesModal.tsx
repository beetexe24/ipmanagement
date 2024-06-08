import React, { useState } from "react";

import { Button, Modal, Select } from "flowbite-react";


export default function HistoriesModal({openModalHistories, setOpenModalHistories, historyData})
{
    const [modalPlacement, setModalPlacement] = useState('center');

    return (
        <>
            <Modal
                show={openModalHistories}
                position={modalPlacement}
                onClose={() => setOpenModalHistories(false)}
            >
                <Modal.Header>Previous label</Modal.Header>
                <Modal.Body>
                <div className="space-y-6">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                    <th scope="col" className="px-6 py-3 w-40">
                                        Date updated
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Label
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Updated by
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {historyData.length > 0 ?
                                    historyData.map((row:any, index:number) =>(
                                        <tr key={index} className="bg-white border-b">
                                            <td className="px-6 py-4">
                                                {row.created_at}
                                            </td>
                                            <th scope="row" className="px-6 py-4 font-normal text-gray-900 break-word">
                                                {row.label}
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-normal text-gray-900 break-word">
                                                {row.email}
                                            </th>
                                        </tr>
                                        ))
                                    :
                                    <tr className="bg-white border-b">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap">
                                            No data
                                        </th>
                                    </tr>
                                }
                                
                                
                            </tbody>
                        </table>
                    </div>

                </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    )
}