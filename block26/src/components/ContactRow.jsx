import React from "react";
import { useNavigate } from "react-router-dom";

//add navigation
export default function ContactRow({ contact }) {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate(`/contact/${contact.id}`);
  };

  return (
    <tr onClick={handleRowClick} style={{ cursor: "pointer" }}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
