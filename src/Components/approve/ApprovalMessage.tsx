import React, { FC } from "react";
import { useSelector } from "react-redux";
import Loading from "../loadings/Loading";
import styled from "styled-components";

const ApproveMessage: FC = () => {
  const state: any = useSelector((state: any) => state.approveReducer);

  return (
    <>
      {state.successMessage ? (
        <SuccessMessageWrapper>
          <p style={{ color: "blue" }}>registration is completed</p>
          <button>go to profile</button>
        </SuccessMessageWrapper>
      ) : null}
      {state.showLoading ? (
        <LoadingWrapper>
          <Loading />
          <p style={{ color: "red" }}>please wait</p>
        </LoadingWrapper>
      ) : null}
    </>
  );
};

const LoadingWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 0 0;
`;
const SuccessMessageWrapper = styled(LoadingWrapper)``;
export default ApproveMessage;
