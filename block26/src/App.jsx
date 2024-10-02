import "./App.css";
import { useState } from "react";
import ContactList, { dummyContacts } from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState(dummyContacts);

  console.log("Contacts", contacts);

  return (
    <>
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
