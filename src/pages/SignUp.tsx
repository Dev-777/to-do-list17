import React, { FC } from "react";
import styled from "styled-components";

const SignUp: FC = () => {
  return (
    <>
      <Main>
        <SignupForm>
          <FormTitle>SignUp Form</FormTitle>
          <SignUpFormLine />
          <SignUpFormLabel>
             <p>Name</p>
            <FormName />
          </SignUpFormLabel>
          <SignUpFormLabel>
            Surname
            <FormSurname />
          </SignUpFormLabel>
          <SignUpFormLabel>
            Email
            <FormEmail />
          </SignUpFormLabel>
          <SignUpFormLabel>
            Password
            <FormPassword />
          </SignUpFormLabel>
          <SignUpFormLabel>
            Repeat Password
            <FormRepeatPassword />
          </SignUpFormLabel>
          <SignUpFormButtonsContainer>
            <SignUpButton>SignUp</SignUpButton>
            <CancelSignUp>Cancel</CancelSignUp>
          </SignUpFormButtonsContainer>
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
  align-items:center;
`;
const SignUpFormLine=styled('hr')`
width:80%`
const FormTitle = styled("h1")`
  font-size: 25px;
`;

const FormName = styled("input")`
  height: 30px;
  margin: 4px 0 0 0;
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
const SignUpFormLabel=styled('label')`
display:flex;
flex-direction: column;
width: 75%;
margin: 8px 0 0 0;
`
const SignUpFormButtonsContainer =styled('div')`
margin:20px 0 0 0 `

export default SignUp;
