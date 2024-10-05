import React from "react";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();
  const contact = location.state || {};

  return (
    <div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-2xl">{contact.full_name}</h1>
        <img
          src={`${contact.avatar_url}/${contact.id}`}
          alt={contact.full_name}
          className="w-52 h-52"
        />
      </div>
      <div className="flex flex-col gap-1 border rounded-md p-2 m-2">
        <p>{contact.company}</p>
        <p>{contact.details}</p>
        <p>{contact.email}</p>
        <p>{contact.phone_number}</p>
        <p>
          {contact.addresses.map(
            (address) =>
              `${address.line_1} ${address.line_2 ? address.line_2 : ""} ${
                address.zip_code
              } ${address.city} ${address.state}`
          )}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
