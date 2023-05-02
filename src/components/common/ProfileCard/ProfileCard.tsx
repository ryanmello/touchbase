import React, { useMemo, useState } from "react";
import "./ProfileCard.scss";
import PostCard from "../PostCard/PostCard";
import { getStatus, postStatus } from "../../../api/FirestoreAPI";
import { getUniqueId } from "../../../helpers/getUniqueId";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";

const ProfileCard = ({ currentUser, onEdit }) => {
  const [allPosts, setAllPosts] = useState<any[]>([]);

  useMemo(() => {
    getStatus(setAllPosts);
  }, []);

  return (
    <div className="profile-card">
      <div className="profile-card-container">
        <button className="edit-btn" onClick={onEdit}>
          Edit
        </button>
        <div className="items-container">
          <div className="left-items">
            <h3 className="username">{currentUser.name}</h3>
            <p className="about">{currentUser.about}</p>
            <p className="location">{currentUser.location}</p>
          </div>
          <div className="right-items">
            <p className="company">{currentUser.company}</p>
            <p className="college">{currentUser.college}</p>
          </div>
        </div>
      </div>
      <div className="profile-posts">
        {allPosts
          .filter((item) => {
            return item.userEmail === localStorage.getItem("userEmail");
          })
          .map((post) => {
            return (
              <div key={post.postId} className="post-card-alignment">
                <PostCard post={post} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProfileCard;
