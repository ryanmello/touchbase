import React, { useEffect, useMemo, useState } from "react";
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
import { uploadImage as uploadImageAPI } from "../../../api/ImageUpload";
import FileUploadModal from "../FileUploadModal/FileUploadModal";
import Loader from "../Loader/Loader";

const ProfileCard = ({ currentUser, onEdit }) => {
  let location = useLocation();
  const [allPosts, setAllPosts] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
  const [showFileUploadModal, setShowFileUploadModal] = useState(false);
  const [progress, setProgress] = useState(0);

  /* if there exists an id state and an email state, get the current
   * user, set the current profile, set all the posts for current user */
  useMemo(() => {
    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email);
    }

    if (location?.state?.id) {
      getSingleStatus(setAllPosts, location?.state?.id);
    }
  }, []);

  return (
    <div className="profile-card">
      <div className="profile-card-container">
        <div className="items-container">
          {showFileUploadModal ? (
            <FileUploadModal
              currentUser={currentUser}
              showFileUploadModal={showFileUploadModal}
              setShowFileUploadModal={setShowFileUploadModal}
              setProgress={setProgress}
              progress={progress}
            />
          ) : (
            <></>
          )}

          {Object.values(currentProfile).length === 0 ? (
            <HiOutlinePencil className="edit-btn" size={30} onClick={onEdit} />
          ) : (
            <></>
          )}

          <div className="items-container">
            <div className="left-items">
              <div>
                {Object.values(currentProfile).length === 0 ? (
                  <img
                    className="image"
                    src={currentUser.imageLink}
                    onClick={() => setShowFileUploadModal(!showFileUploadModal)}
                  ></img>
                ) : (
                  <img
                    className="image"
                    src={currentProfile?.imageLink}
                  ></img>
                )}
              </div>
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
      </div>
      <div className="profile-posts">
        {allPosts.map((post) => {
          return (
            <div key={post.id} className="profile-card">
              <PostCard post={post} currentUser={currentUser} currentUserId={currentUser.userId}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileCard;
