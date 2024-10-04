import React, { useMemo } from "react";
import { findById, truncate } from "../utils/functions";
import { Link, useNavigate } from "react-router-dom";

const contactsToDisplayMemo = (contacts, cities, states) => {
  return contacts.map((contact) => ({
    id: contact.id,
    avatar_url: contact.avatar_url,
    full_name: `${contact.first_name} ${contact.last_name}`,
    company: contact.company,
    details: truncate(contact.details, 100),
    email: contact.email,
    phone_number: `(${contact.phone.area_code}) ${contact.phone.number}`,
    addresses: contact.addresses.map((address) => ({
      line_1: address.line_1,
      line_2: address.line_2,
      zip_code: address.zip_code,
      city: findById(cities, address.city_id),
      state: findById(states, address.state_id),
    })),
  }));
};

const ContactsScreen = ({ contacts, cities, states }) => {
  const navigate = useNavigate();

  const contactsToDisplay = useMemo(
    () => contactsToDisplayMemo(contacts, cities, states),
    [contacts, cities, states]
  );

  const handleNavigate = (
    id,
    avatar,
    full_name,
    company,
    details,
    email,
    phone_number,
    addresses
  ) => {
    navigate(`/perfil/${id}`, {
      state: {
        id,
        avatar,
        full_name,
        company,
        details,
        email,
        phone_number,
        addresses,
      },
    });
  };

  return (
    <div>
      <nav className="items-center">
        <ul className="flex flex-row justify-center gap-10">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/contacts">My Contacts</a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl">Contacts</h1>
        {contactsToDisplay.map((contact) => (
          <div key={contact.id} className="flex flex-col gap-3 pb-2 border-b">
            <div className="flex flex-col items-center">
              <img
                src={contact.avatar_url}
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
              onClick={() =>
                handleNavigate(
                  contact.id,
                  contact.avatar_url,
                  contact.full_name,
                  contact.company,
                  contact.details,
                  contact.email,
                  contact.phone_number,
                  contact.addresses
                )
              }
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
