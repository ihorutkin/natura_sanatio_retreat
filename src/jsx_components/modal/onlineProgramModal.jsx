import React from 'react';
import "../../styles/modal/online_program_modal.css"

const OnlineProgramModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}

export default OnlineProgramModal