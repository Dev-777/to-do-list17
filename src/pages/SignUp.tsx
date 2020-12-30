import React, { FC } from "react";
import styled from "styled-components";

const SignUp: FC = () => {
  return (
    <>
      <Main>
        <SignupForm>
          <FormTitle>SignUp Form</FormTitle>
          <hr />
          <label>
            Name
            <FormName />
          </label>
          <label>
            Surname
            <FormSurname />
          </label>
          <label>
            Email
            <FormEmail />
          </label>
          <label>
            Password
            <FormPassword />
          </label>
          <label>
            Repeat Password
            <FormRepeatPassword />
          </label>
          <div>
            <SignUpButton>SignUp</SignUpButton>
            <CancelSignUp>Cancel</CancelSignUp>
          </div>
        </SignupForm>
      </Main>
    </>
  );
};

const Main = styled("div")`
  display: flex;
  justify-content: center;
`;
const SignupForm = styled("div")`
  display: flex;
  width: 30%;
  height: 600px;
  background-color: bisque;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  margin: 20px 0 0 0;
  flex-direction: column;
`;
const FormTitle = styled("h1")`
  font-size: 25px;
`;

const FormName = styled("input")`
  height: 30px;
  margin: 5px 0 0 0;
  font-size: 20px;
`;
const FormSurname = styled(FormName)``;
const FormEmail = styled(FormName)``;
const FormPassword = styled(FormName)``;
const FormRepeatPassword = styled(FormName)``;

const SignUpButton = styled("button")`
  background-color: tomato;
`;
const CancelSignUp = styled("button")`
  background-color: #68a9ff;
`;

export default SignUp;
