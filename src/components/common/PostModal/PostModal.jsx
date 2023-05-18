import React, { useState } from "react";
import "./PostModal.scss";
import { Button, Modal } from "antd";
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineClose  } from "react-icons/ai";

const PostModal = ({
  modalOpen,
  setModalOpen,
  status,
  setStatus,
  sendStatus,
  postImageLink,
  setPostImageLink,
  uploadPostImage,
  topicValue,
  setTopicValue,
  topics,
  setTopics,
}) => {
  const [progress, setProgress] = useState(0);

  const handleModalClose = () => {
    setModalOpen(false);
    setPostImageLink("");
  };

  const addTopic = () => {
    if (topicValue.trim() !== "") {
      setTopics([...topics, topicValue]);
      setTopicValue("");
    }
  };

  const removeTopic = (index) => {
    setTopics(topics => {
      const newArray = [...topics];
      newArray.splice(index, 1);
      return newArray;
    })
  }

  return (
    <div>
      <Modal
        title="Create A Post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={handleModalClose}
        footer={[
          <Button
            onClick={sendStatus}
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
          >
            Post
          </Button>,
        ]}
      >
        <textarea
          value={status}
          placeholder="What do you want to talk about?"
          className="modal-textarea"
          onChange={(event) => setStatus(event.target.value)}
        ></textarea>
        <p className="topic-header">Add Topics</p>
        <div className="topic-input-container">
          <input
            type="text"
            value={topicValue}
            onChange={(e) => setTopicValue(e.target.value)}
            className="topic-input"
            placeholder="Team, Tournament, Player, etc..."
          ></input>
          <button onClick={addTopic} className="topic-button">
            Add
          </button>
        </div>
        <ul className="topic-list">
          {topics.map((topic, index) => (
            <li className="topic" key={index} >
              <p value={topic} onClick={() => removeTopic(index)}>{topic}</p>
            </li>
          ))}
        </ul>
        <img src={postImageLink} className="image-preview"></img>
        <label className="image-label" htmlFor="file-upload">
          <AiOutlinePicture size={30} />
        </label>
        <input
          hidden
          id="file-upload"
          type="file"
          onChange={(event) =>
            uploadPostImage(
              event.target.files[0],
              setPostImageLink,
              setProgress
            )
          }
        ></input>
      </Modal>
    </div>
  );
};

export default PostModal;
