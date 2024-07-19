import React from 'react';
import { Modal, ModalHeader, ModalFooter } from '@windmill/react-ui';

const LogoutPopup = ({ isOpen, onLogout, onClose }) => {

  const handleCancel = (e) => {
    e.stopPropagation(); // Prevent event propagation to parent elements
    onClose(); // Close the popup
  };

  return (
    <Modal isOpen={isOpen} >
      
      {/*<div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">*/}
          <ModalHeader className="text-center">Are you sure you want to logout?</ModalHeader>
          
          <ModalFooter className="flex justify-center">
            <button onClick={onLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
              Logout
            </button>
            <button onClick={handleCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
              Cancel
            </button>
          </ModalFooter>
        {/*</div>
      </div>*/}
    </Modal>
  );
};

export default LogoutPopup;
