export default function ContactRow({ contact }) {
  return (
    <tr key={contact.id}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
