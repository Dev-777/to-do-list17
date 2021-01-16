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
  margin: 0 auto;
  width: 600px;
  height: 500px;
  border: 1px solid black;
  flex-direction: column;
  align-items: center;
`;

export default Approve;
