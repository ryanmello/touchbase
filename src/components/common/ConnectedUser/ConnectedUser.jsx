import React, { useState, useEffect } from "react";
import "./ConnectedUser.scss";
import { FaCheck } from "react-icons/fa";
import { getConnections } from "../../../api/FirestoreAPI";
import { addConnection } from "../../../api/FirestoreAPI";
import { removeConnection } from "../../../api/FirestoreAPI";

const ConnectedUser = ({ user, currentUser, getConnection }) => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    getConnections(currentUser.userId, user.id, setIsConnected);
  }, []);

  const deleteConnection = () => {
    removeConnection(currentUser.userId, user.id);
    setIsConnected(false);
  };

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
        {isConnected ? (
          <button onClick={() => deleteConnection()} className="connected-btn">
            Connected
          </button>
        ) : (
          <button
            onClick={() => getConnection(user.id)}
            className="connect-btn"
          >
            Connect
          </button>
        )}
      </div>
    </div>
  );
};

export default ConnectedUser;
