import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-form">
        <h1 className="contact-title">Leave a message</h1>
        <input
          id="userName"
          type="text"
          placeholder="Type in your name..."
          className="input-box"
        />
        <input
          id="userEmail"
          type="email"
          placeholder="Type in your email..."
          className="input-box"
        />
        <textarea
          id="userMessage"
          cols="30"
          rows="3"
          placeholder="And your message..."
          className="input-box"
        ></textarea>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Contact;
