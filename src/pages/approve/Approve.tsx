import React, { FC } from "react";
import ApproveForm from "../../Components/approve/ApproveForm";
import ApproveMessage from "../../Components/approve/ApprovalMessage";
import styled from "styled-components";

const Approve: FC = () => {
  return (
    <>
      <ApproveWrapper>
        <ApproveForm />
        <ApproveMessage />
      </ApproveWrapper>
    </>
  );
};

const ApproveWrapper = styled("div")`
  display: flex;
  margin: 25px auto;
  width: 600px;
  height: 500px;
  flex-direction: column;
  align-items: center;
`;

export default Approve;
