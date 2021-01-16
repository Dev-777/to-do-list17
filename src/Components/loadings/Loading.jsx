import React from "react";
import { WindMillLoading } from "react-loadingg";

const Loading = () => {
  return (
    <>
      <div
        style={{
          width: 100,
          height: 100,
          position: "relative",
        }}
      >
        <WindMillLoading />
      </div>
    </>
  );
};

export default Loading;
