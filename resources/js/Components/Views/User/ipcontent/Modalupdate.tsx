import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import React from "react";

export default function Modalupdate({openModalUpdate, closeIPupdate, ipaddress_to_be_updated, label_to_be_updated, updateDataToAdd, updateIPaddress})
{

    return (
        <Modal show={openModalUpdate} size="md" onClose={closeIPupdate} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div className="text-left">
                <p className="text-md font-semibold text-red-700 whitespace-pre-line"></p>
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">IP Address: {ipaddress_to_be_updated}</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="label" value="Label" />
              </div>
              <TextInput id="label" name="label" type="textbox" onChange={updateDataToAdd} defaultValue={label_to_be_updated} required />
            </div>
            
            <div className="w-full">
                <button type="button" onClick={updateIPaddress} className="float-right mb-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Update</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
}