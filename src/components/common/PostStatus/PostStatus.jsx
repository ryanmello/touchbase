import React from "react";
import "./PostStatus.scss";
import { useState, useMemo } from "react";
import PostModal from "../PostModal/PostModal";
import { postStatus, getStatus } from "../../../api/FirestoreAPI";
import PostCard from "../PostCard/PostCard";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import { getUniqueId } from "../../../helpers/getUniqueId";

const PostStatus = ({ currentUser }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allPosts, setAllPosts] = useState([]);

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

  return (
    <div className="post-status-container">
      <div className="post-status">
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
              id={currentUser.userId}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostStatus;
