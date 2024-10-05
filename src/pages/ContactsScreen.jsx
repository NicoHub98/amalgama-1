import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { contactsToDisplayMemo } from "../utils/contactVariable";

const ContactsScreen = ({ contacts, cities, states }) => {
  const navigate = useNavigate();

  const contactsToDisplay = useMemo(
    () => contactsToDisplayMemo(contacts, cities, states),
    [contacts, cities, states]
  );

  const handleNavigate = (contact) => {
    navigate(`/perfil/${contact.id}`, { state: contact });
  };

  return (
    <div>
      <nav className="items-center">
        <ul className="flex flex-row justify-center gap-10">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>My Contacts</a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl">Contacts</h1>
        {contactsToDisplay.map((contact) => (
          <div key={contact.id} className="flex flex-col gap-3 pb-2 border-b">
            <div className="flex flex-col items-center">
              <img
                src={`${contact.avatar_url}/${contact.id}`}
                alt="Contact Avatar"
                className="max-w-52 max-h-52"
              />
              <span className="flex flex-row items-center gap-2 p-3">
                <h3 className="text-xl">{contact.full_name}</h3>
                <h4 className="text-lg">{contact.company}</h4>
              </span>
            </div>
            <p className="max-w-[500px]">{contact.details}</p>
            <ul>
              <li>email: {contact.email}</li>
              <li>phone: {contact.phone_number}</li>
              <li>
                {contact.addresses.length > 1 ? (
                  <h4>Addresses:</h4>
                ) : (
                  <h4>Address:</h4>
                )}
                {contact.addresses.map((address, index) => (
                  <ul key={index}>
                    <li>{address.line_1}</li>
                    <li>{address.line_2}</li>
                    <li>{address.zip_code}</li>
                    <li>{address.city}</li>
                    <li>{address.state}</li>
                  </ul>
                ))}
              </li>
            </ul>
            <button
              onClick={() => handleNavigate(contact)}
              className="w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
            >
              Ver Perfil
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsScreen;
