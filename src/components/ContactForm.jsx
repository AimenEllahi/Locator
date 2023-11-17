import React from "react";
import { FaTimes } from "react-icons/fa";

const ContactForm = ({ handleClose, dealerName }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
    handleClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-8 rounded-md max-w-md w-full">
        <div className="flex justify-end">
          <FaTimes className="cursor-pointer" onClick={handleClose} />
        </div>
        <h2 className="text-2xl mb-4" id="modal-title">
          Contact {dealerName}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="p-2 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
