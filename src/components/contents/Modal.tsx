import React from 'react';

const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded shadow-lg">
                <button onClick={onClose} className="float-right">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
