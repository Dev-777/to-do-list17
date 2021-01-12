import React from "react";
import { WindMillLoading } from "react-loadingg";

const RegistrationLoading = () => {
  return (
    <>
      <WindMillLoading />
      <p style={{ color: "red" }}>Please Wait</p>
      <button>Go to profile</button>
    </>
  );
};

export default RegistrationLoading;
