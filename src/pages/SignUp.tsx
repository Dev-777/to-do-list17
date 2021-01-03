import React, { FC, ChangeEvent } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {nameOnchange, surnameOnchange, emailOnchange, passwordOnchange} from "../store/signUp/actions"

const SignUp: FC = () => {

const state = useSelector((state:any)=> state) 
 const dispatch =useDispatch();
 
 const name: any = (event: ChangeEvent<HTMLInputElement> )=>{
   dispatch(nameOnchange(event))
 }
 const surName: any = (event: ChangeEvent<HTMLInputElement> )=>{
   dispatch(surnameOnchange(event))
   
 }
  const email: any = (event: ChangeEvent<HTMLInputElement> )=>{
   dispatch(emailOnchange(event))
 }
  const password: any = (event: ChangeEvent<HTMLInputElement> )=>{
   dispatch(passwordOnchange(event))
 }
 
 console.log(state, "root state")
 
 
  return (
    <>
      <Main>
        <SignupForm>
          <FormTitle>SignUp Form</FormTitle>
          <SignUpFormLine />
          <SignUpFormLabel>
             <p>Name</p>
            <FormName  onChange={(event)=>name(event.target.value)}/>
          </SignUpFormLabel>
          <SignUpFormLabel>
            Surname
            <FormSurname onChange={(event)=>surName(event.target.value)}/>
          </SignUpFormLabel>
          <SignUpFormLabel>
            <p>Email</p>
            <FormEmail onChange={(event)=>email(event.target.value)}/>
          </SignUpFormLabel>
          <SignUpFormLabel>
           <p>Password</p> 
            <FormPassword onChange={(event)=>password(event.target.value)}/>
          </SignUpFormLabel>
          <SignUpFormLabel>
           <p>Repeat Password</p> 
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
