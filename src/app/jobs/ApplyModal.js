'use client'
import React from 'react';

export default function ApplyModal({ isOpen, onClose, onApply, applicationDetails, handleChange, position }) {
  if (!isOpen) return null;

  // Calculate the modal's width dynamically and center it below the button
  const modalWidth = 280; // Adjust this to the modal width you want
  const offset = modalWidth ; // Half the width to center it

  const modalStyle = {
    position: 'absolute',
    top: position.top + 2+ 'px', // push it slightly below the button
    left: position.left - offset + 'px', // center the modal under the button
    zIndex: 9999,
    background: 'var(--primary-color)',

    border: '1px solid gray',
    borderRadius: '10px',
    padding: '16px',
    boxShadow: '0 4px 12px var(--foreground)',
    width: modalWidth + 'px',
  };

  return (
    <div style={modalStyle}>
     
      <div className="flex flex-col gap-2">
        <input
          type="date"
          name="date"
          value={applicationDetails.date}
          onChange={handleChange}
          className=" p-2 rounded bg-white"
        />
        <input
          type="time"
          name="time"
          value={applicationDetails.time}
          onChange={handleChange}
          className=" p-2 rounded bg-white"
        />
        <div className='flex justify-between gap-2 mt-2'>
          <button
            onClick={onApply}
            className=" px-3 py-1 font-semibold bg-white rounded-[15px] hover:bg-[var(--foreground)] hover:text-white  text-center"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className=" px-3 py-1 font-semibold bg-white rounded-[15px] hover:bg-[var(--foreground)] hover:text-white  text-center"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
