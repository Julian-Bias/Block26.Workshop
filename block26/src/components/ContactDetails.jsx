import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to retrieve the contact ID from the URL

export default function ContactDetails({ contacts }) {
  const { id } = useParams(); // Get the contact ID from the URL
  const contact = contacts.find((contact) => contact.id === parseInt(id)); // Find the contact by ID

  if (!contact) {
    return <div>Contact not found.</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>
        <strong>Name:</strong> {contact.name}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>
    </div>
  );
}
