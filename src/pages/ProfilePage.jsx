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

  useEffect(() => {
    console.log(location.state);
  }, []);

  return (
    <div className="">
      <h1>{full_name}</h1>
      <img src={avatar} alt={full_name} className="w-52 h-52" />
      <p>{company}</p>
      <p>{details}</p>
      <p>{email}</p>
      <p>{phone_number}</p>
      <p>
        {addresses.map(
          (address) =>
            `${address.line_1} ${address.line_2} ${address.zip_code} ${address.city} ${address.state}`
        )}
      </p>
    </div>
  );
};

export default ProfilePage;
