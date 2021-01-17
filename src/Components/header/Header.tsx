import React from "react";
import styled from "styled-components";
import HeaderLogo from "../logos/HeaderLogo";
import UserLogo from "../logos/UserLogo";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const state = useSelector((state: any) => state.headerReducer);
  return (
    <>
      <HeaderWrapper>
        <HeaderLogo />
        {state.login ? (
          <UserLogo />
        ) : (
          <div>
            <Link to={"/signIn"}>Sign In</Link>
            <Link to={"/signUp"}>Sign Up</Link>
          </div>
        )}
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled("header")`
  height: 60px;
  background-color: darkolivegreen;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
`;

export default Header;
