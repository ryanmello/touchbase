import React from "react";
import { onLogout } from "../../../api/AuthAPI";
import "./ProfilePopup.scss";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { getCurrentUser } from "../../../api/FirestoreAPI";
import { useMemo, useState } from "react";
import Profile from "../../../assets/profile.jpg";

const ProfilePopup = ({ popupVisible, setPopupVisible }) => {
  const redirect = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div className="profile-popup">
      <div className="profile-information">
        <div className="profile-information-left">
          <img className="image" src={currentUser.imageLink}></img>
        </div>  
        <div className="profile-information-right">
          <p className="name">{currentUser.name}</p>
          <p className="about">{currentUser.headline}</p>
        </div>
      </div>
      <Button
        title={"View Profile"}
        onClick={() => {
          setPopupVisible(!popupVisible);
          redirect("/profile", {
            state: {
              id: currentUser.userId,
            },
          });
        }}
      ></Button>
      <Button title={"Logout"} onClick={onLogout}></Button>
    </div>
  );
};

export default ProfilePopup;
