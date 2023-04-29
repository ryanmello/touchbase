import React from "react";
import "./PostStatus.scss";
import { useState, useMemo } from "react";
import PostModal from "../PostModal/PostModal";
import { postStatus, getStatus } from "../../../api/FirestoreAPI";
import PostCard from "../PostCard/PostCard";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";

const PostStatus = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  const sendStatus = () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
    };

    postStatus(object);
    setModalOpen(false);
    setStatus("");
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
          <>
            <PostCard post={post} />
          </>
        );
      })}
    </div>
  );
};

export default PostStatus;
