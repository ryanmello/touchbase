import React, { useState } from "react";
import "./ConnectedUser.scss";
import { AiOutlinePlus } from "react-icons/ai";

const ConnectedUser = ({ user, currentUser, getConnection }) => {
  return (
    <div className="connected-user-container" key={user.id}>
      <div className="connected-user">
        <img className="user-image" src={user.imageLink}></img>
        <div className="user-info">
          <p className="user-name">{user.name}</p>
          <p className="user-headline">{user.headline}</p>
        </div>
      </div>
      <div className="connect-btn-container">
        <button onClick={() => getConnection(user.id)} className="connect-btn">
          Connect
        </button>
      </div>
    </div>
  );
};

export default ConnectedUser;
