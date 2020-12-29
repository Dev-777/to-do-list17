import React from "react";
import styled from "styled-components";
import CreateItemFormModal from "./modals/CreateItemFormModal";

const AppHeader: React.FC = () => {
  return (
    <>
      <AppHeaderWrapper>
        <Left>
          <div>logo</div>
        </Left>
        <Right>
          <CreateItemFormModal />
          <button>signIn</button>
          <button>signUp</button>
        </Right>
      </AppHeaderWrapper>
    </>
  );
};

const AppHeaderWrapper = styled("div")`
  width: 100%;
  height: 5vh;
  display: flex;
  background-color: wheat;
  justify-content: space-between;
`;
const Left = styled("div")``;
const Right = styled("div")``;
export default AppHeader;
