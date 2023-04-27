import React from "react";
import { Space, Spin } from "antd";
import './loader.scss'

const Loader = () => {
  return (
    <div className="loader">
      <Space size="large">
        <Spin />
      </Space>
    </div>
  );
};

export default Loader;
