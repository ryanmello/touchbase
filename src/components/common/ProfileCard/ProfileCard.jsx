import React, { useMemo, useState } from "react";
import "./ProfileCard.scss";
import PostCard from "../PostCard/PostCard";
import {
  getSingleStatus,
  getSingleUser,
  getStatus,
  postStatus,
} from "../../../api/FirestoreAPI";
import { useLocation } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";

const ProfileCard = ({ currentUser, onEdit }) => {
  let location = useLocation();
  const [allPosts, setAllPosts] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});

  useMemo(() => {
    if (location?.state?.id) {
      getSingleStatus(setAllPosts, location?.state?.id);
    }

    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email);
    }
  }, []);

  return (
    <div className="profile-card">
      <div className="profile-card-container">
        <HiOutlinePencil
          className="edit-btn"
          size={30}
          onClick={onEdit}
        />

        <div className="items-container">
          <div className="left-items">
            <h3 className="username">
              {Object.values(currentProfile).length === 0
                ? currentUser.name
                : currentProfile?.name}
            </h3>
            <p className="headline">
              {Object.values(currentProfile).length === 0
                ? currentUser.headline
                : currentProfile?.headline}
            </p>
            <p className="location">
              {Object.values(currentProfile).length === 0
                ? currentUser.location
                : currentProfile?.location}
            </p>
            <a className="website" href={currentUser.website} target="_blank">
              {Object.values(currentProfile).length === 0
                ? currentUser.website
                : currentProfile?.website}
            </a>
          </div>
          <div className="right-items">
            <p className="company">
              {Object.values(currentProfile).length === 0
                ? currentUser.company
                : currentProfile?.company}
            </p>
            <p className="college">
              {Object.values(currentProfile).length === 0
                ? currentUser.college
                : currentProfile?.college}
            </p>
          </div>
        </div>
      </div>
      <div className="profile-posts">
        {allPosts.map((post) => {
          return (
            <div key={post.postId} className="profile-card">
              <PostCard post={post} id={currentUser.userId} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileCard;
