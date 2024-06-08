import React, { useEffect, useState } from "react";
import { Button, Modal } from 'flowbite-react';
import { HiCheckCircle } from "react-icons/hi";


export default function Modalcreateaccount({openModalcreateaccount, setOpenModalcreateaccount})
{
    
    return (
        <>
            <Modal show={openModalcreateaccount} size="md" onClose={() => setOpenModalcreateaccount(false)} popup>
                <Modal.Header />
                <Modal.Body>
                <div className="text-center">
                    <HiCheckCircle className="mx-auto mb-4 h-14 w-14 text-green-400" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500">
                        Successfully created. Please login your account
                    </h3>
                    <div className="flex justify-center gap-4">
                    <Button color="gray" onClick={() => location.href = "/login"}>
                        OK
                    </Button>
                    </div>
                </div>
                </Modal.Body>
            </Modal>
        </>
    )
}