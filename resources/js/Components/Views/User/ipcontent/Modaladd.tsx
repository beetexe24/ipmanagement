import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import React from "react";

export default function Modaladd({openModalAdd, onCloseModalAdd, add_new_ipaddress})
{

    return (
        <Modal show={openModalAdd} size="md" onClose={onCloseModalAdd} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">ADD NEW IP ADDRESS</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="ipaddress" value="IP Address" />
              </div>
              <TextInput id="ipaddress" type="textbox" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="label" value="Label" />
              </div>
              <TextInput id="label" type="textbox" required />
            </div>
            
            <div className="w-full">
                <button onClick={() => add_new_ipaddress()} type="button" className="float-right mb-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Submit</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
}