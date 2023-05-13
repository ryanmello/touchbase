import React from "react";
import "./PostStatus.scss";
import { useState, useMemo, useEffect } from "react";
import PostModal from "../PostModal/PostModal";
import { postStatus, getStatus } from "../../../api/FirestoreAPI";
import PostCard from "../PostCard/PostCard";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import { getUniqueId } from "../../../helpers/getUniqueId";
import { getConnections } from "../../../api/FirestoreAPI";

const PostStatus = ({ currentUser }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  const sendStatus = () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: currentUser.email,
      userName: currentUser.name,
      postId: getUniqueId(),
      userId: currentUser.userId,
    };

    postStatus(object);
    setModalOpen(false);
    () => setStatus("");
  };

  useMemo(() => {
    getStatus(setAllPosts);
  }, []);

  useEffect(() => {
    getConnections();
  }, [currentUser.userId]);

  return (
    <div className="post-status-container">
      <div className="post-status">
        <div className="profile-items">
          <img className="image" src={currentUser.imageLink}></img>
            <h3>{currentUser.name}</h3>
            <p className="headline">{currentUser.headline}</p>
        </div>
        <button className="open-post-modal" onClick={() => setModalOpen(true)}>
          Start a post
        </button>
      </div>

      <PostModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        status={status}
        setStatus={setStatus}
        sendStatus={sendStatus}
      />

      {allPosts.map((post) => {
        return (
          <div key={post.postId} className="post-card-alignment">
            <PostCard
              post={post}
              currentUser={currentUser}
              currentUserId={currentUser.userId}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostStatus;
