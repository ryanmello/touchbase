import React, { useEffect, useState } from "react";
import "../sass/ConnectionsComponent.scss";
import { getAllUsers } from "../api/FirestoreAPI";
import ConnectedUser from "./common/ConnectedUser/ConnectedUser";
import { addConnection } from "../api/FirestoreAPI";
import { getConnections } from "../api/FirestoreAPI";

const ConnectionsComponent = ({ currentUser }) => {
  const [allUsers, setAllUsers] = useState([]);

  const getConnection = (targetId) => {
    addConnection(currentUser.userId, targetId);
  };

  useEffect(() => {
    getAllUsers(setAllUsers);
  }, []);

  return (
    <div className="connection-component">
      {allUsers.map((user) => {
        return user.id === currentUser.userId ? (
          <div key={user.id}></div>
        ) : (
          <ConnectedUser
            getConnection={getConnection}
            user={user}
            currentUser={currentUser}
            key={user.id}
          />
        );
      })}
    </div>
  );
};

export default ConnectionsComponent;
