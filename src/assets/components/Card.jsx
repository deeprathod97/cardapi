import React from 'react';
import './Card.css'; // Optionally, create a CSS file for styling

const UserCard = ({ username, email, phone, image }) => {
  return (
    <div className="user-card">
      <img src={image} alt="user" />
      <h2>{username}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default UserCard;