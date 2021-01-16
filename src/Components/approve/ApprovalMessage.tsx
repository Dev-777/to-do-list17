import React, { FC } from "react";
import { useSelector } from "react-redux";

const ApproveMessage: FC = () => {
  const state: any = useSelector((state: any) => state.approveSignUpReducer);

  return (
    <>
      {state.registrationSuccess ? (
        <div>
          <p style={{ color: "green" }}>registration is completed</p>
          <button>go to profile</button>
        </div>
      ) : (
        <p style={{ color: "red" }}>please wait</p>
      )}
    </>
  );
};
export default ApproveMessage;
