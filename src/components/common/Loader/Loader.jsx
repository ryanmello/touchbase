import React from "react";
import { Space, Spin } from "antd";

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
