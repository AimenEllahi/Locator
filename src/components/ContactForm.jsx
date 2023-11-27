import React from "react";
import { FaTimes } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactForm = ({ handleClose, dealerName, dealerEmail }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const address = formData.get("address");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Define the template parameters
    const templateParams = {
      to_email: dealerEmail, // Replace with the actual dealer's email
      from_name: name,
      message: message,
      address: address,
      phone: phone,
      email: email,
    };

    try {
      await emailjs.send(
        "service_pjqkf5e",
        "template_otp2pnw",
        templateParams,
        "dPLrQc45ffc0CeLJx"
      );

      // Handle successful submission
      console.log("Email sent successfully");
    } catch (error) {
      // Handle error
      console.error("Error sending email", error);
    }

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
            name="name" // Add name attribute
            placeholder="Name"
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email" // Add name attribute
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="address" // Add name attribute
            placeholder="Address"
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="phone" // Add name attribute
            placeholder="Phone"
            className="p-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="message" // Add name attribute
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
