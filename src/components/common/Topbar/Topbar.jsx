import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./topbar.scss";
import LinkedinLogo from "../../../assets/linkedinLogo.png";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import User from "../../../assets/user.png";
import ProfilePopup from "../ProfilePopup/ProfilePopup";
import SearchUsers from "../SearchUsers/SearchUsers";
import { getAllUsers } from "../../../api/FirestoreAPI";

const Topbar = ({ currentUser }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const redirect = useNavigate();
  const goToRoute = (route) => {
    redirect(route);
  };

  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };

  useEffect(() => {
    getAllUsers(setAllUsers);
  }, [])

  return (
    <div className="topbar-main">
      {popupVisible ? (
        <div className="popup-position">
          <ProfilePopup
            popupVisible={popupVisible}
            setPopupVisible={setPopupVisible}
          />
        </div>
      ) : (
        <></>
      )}
      {/* <img className="topbar-logo" src={LinkedinLogo} alt="" /> */}
      <div className="topbar-logo" onClick={() => goToRoute("/home")}>
        TouchBase
      </div>
      <div className="react-icons">
        {isSearch ? (
          <SearchUsers
            setIsSearch={setIsSearch}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            allUsers={allUsers}
          />
        ) : (
          <AiOutlineSearch
            size={25}
            className="react-icon"
            onClick={() => setIsSearch(!isSearch)}
          />
        )}
        <AiOutlineHome
          size={25}
          className="react-icon"
          onClick={() => goToRoute("/home")}
        />
        <AiOutlineUserSwitch
          size={25}
          className="react-icon"
          onClick={() => goToRoute("/connections")}
        />
        {/* <BsBriefcase size={25} className="react-icon" onClick={() => goToRoute("/jobs")}/>
        <AiOutlineMessage size={25} className="react-icon" onClick={() => goToRoute("/messages")}/>
        <AiOutlineBell size={25} className="react-icon" onClick={() => goToRoute("/notifications")}/> */}
        <div className="user-container">
          <img
            className="user"
            src={currentUser.imageLink}
            onClick={displayPopup}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
