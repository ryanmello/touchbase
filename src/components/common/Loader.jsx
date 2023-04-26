import React from "react";
import { Space, Spin } from "antd";
import './common.scss'

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
