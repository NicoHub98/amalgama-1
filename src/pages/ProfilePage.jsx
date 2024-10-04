import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();
  const {
    id,
    avatar,
    full_name,
    company,
    details,
    email,
    phone_number,
    addresses,
  } = location.state || {};

  return (
    <div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-2xl">{full_name}</h1>
        <img src={`${avatar}/${id}`} alt={full_name} className="w-52 h-52" />
      </div>
      <div className="flex flex-col gap-1 border rounded-md p-2 m-2">
        <p>{company}</p>
        <p>{details}</p>
        <p>{email}</p>
        <p>{phone_number}</p>
        <p>
          {addresses.map(
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
