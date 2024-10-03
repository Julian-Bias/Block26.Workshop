import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactList, { dummyContacts } from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";

function App() {
  const [contacts, setContacts] = useState(dummyContacts);

  console.log("Contacts", contacts);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} />} />

        <Route
          path="/contact/:id"
          element={<ContactDetails contacts={contacts} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
