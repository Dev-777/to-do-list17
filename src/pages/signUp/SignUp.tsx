import React, { FC, ChangeEvent } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  nameOnchange,
  surnameOnchange,
  emailOnchange,
  passwordOnchange,
  repeatPasswordOnchange,
  nameValidationAction,
  surnameValidationAction,
  emailValidationAction,
  passwordValidationAction,
  repeatPasswordValidationAction,
  postSignUp,
} from "../../store/signUp/actions";
import { Link } from "react-router-dom";

const SignUp: FC = () => {
  const state = useSelector((state: any) => state.signUpReducer);
  const dispatch = useDispatch();
  const onchange: any = (event, dispatch: any, actions: any) => {
    dispatch(actions(event));
  };
  const signUpClicked: any = () => {
    const {
      name,
      surname,
      email,
      password,
      repeatPassword,
    } = state.fieldsValue;
    const regExpNameSurname = /^([a-zA-Z ]){2,30}$/;
    const emailRegexp = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    const passRegexp = /^.{8,30}$/;

    if (!regExpNameSurname.test(name) && !state.validation.name) {
      dispatch(nameValidationAction());
    } else if (regExpNameSurname.test(name) && state.validation.name) {
      dispatch(nameValidationAction());
    }
    if (!regExpNameSurname.test(surname) && !state.validation.surname) {
      dispatch(surnameValidationAction());
    } else if (regExpNameSurname.test(surname) && state.validation.surname) {
      dispatch(surnameValidationAction());
    }
    if (!emailRegexp.test(email) && !state.validation.email) {
      dispatch(emailValidationAction());
    } else if (emailRegexp.test(email) && state.validation.email) {
      dispatch(emailValidationAction());
    }
    if (!passRegexp.test(password) && !state.validation.password) {
      dispatch(passwordValidationAction());
    } else if (passRegexp.test(password) && state.validation.password) {
      dispatch(passwordValidationAction());
    }
    if (password !== repeatPassword && !state.validation.repeatPassword) {
      dispatch(repeatPasswordValidationAction());
    } else if (password === repeatPassword && state.validation.repeatPassword) {
      dispatch(repeatPasswordValidationAction());
    }

    if (
      name &&
      !state.validation.name &&
      !state.validation.surname &&
      !state.validation.email &&
      !state.validation.password &&
      !state.validation.repeatPassword
    ) {
      console.log("dispatch must work");
      dispatch(postSignUp());
    }
  };

  const goToApprovePage = () => {
    return state.fieldsValue.name &&
      !state.validation.name &&
      !state.validation.surname &&
      !state.validation.email &&
      !state.validation.password &&
      !state.validation.repeatPassword
      ? "/approvesignup"
      : "/signup";
  };

  console.log(state, "signup state");

  return (
    <>
      <Main>
        <SignupForm>
          <FormTitle>SignUp</FormTitle>
          <SignUpFormLine />
          <SignUpFormLabel>
            <p>Name</p>
            <FormName
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                onchange(event.target.value, dispatch, nameOnchange)
              }
            />
          </SignUpFormLabel>
          {state.validation.name ? (
            <p style={{ color: "red", fontSize: 15 }}>
              The Name must contain only Latin letters in the range of 2-30
              characters
            </p>
          ) : null}
          <SignUpFormLabel>
            Surname
            <FormSurname
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                onchange(event.target.value, dispatch, surnameOnchange)
              }
            />
          </SignUpFormLabel>
          {state.validation.surname ? (
            <p style={{ color: "red", fontSize: 15 }}>
              The Surname must contain only Latin letters in the range of 2-30
              characters
            </p>
          ) : null}
          <SignUpFormLabel>
            <p>Email</p>
            <FormEmail
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                onchange(event.target.value, dispatch, emailOnchange)
              }
            />
          </SignUpFormLabel>
          {state.validation.email ? (
            <p style={{ color: "red", fontSize: 15 }}>Invalid Emali</p>
          ) : null}
          <SignUpFormLabel>
            <p>Password</p>
            <FormPassword
              type="password"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                onchange(event.target.value, dispatch, passwordOnchange)
              }
            />
          </SignUpFormLabel>
          {state.validation.password ? (
            <p style={{ color: "red", fontSize: 15 }}>
              Password must contain range 8-30 symbols and character
            </p>
          ) : null}
          <SignUpFormLabel>
            <p>Repeat Password</p>
            <FormRepeatPassword
              type="password"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                onchange(event.target.value, dispatch, repeatPasswordOnchange)
              }
            />
          </SignUpFormLabel>
          {state.validation.repeatPassword ? (
            <p style={{ color: "red", fontSize: 15 }}>wrong</p>
          ) : null}
          <SignUpFormButtonsContainer>
            <Link to={goToApprovePage} onClick={signUpClicked}>
              <SignUpButton>SignUp</SignUpButton>
            </Link>
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
  align-items: center;
`;
const SignUpFormLine = styled("hr")`
  width: 80%;
`;
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
const SignUpFormLabel = styled("label")`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 8px 0 0 0;
`;
const SignUpFormButtonsContainer = styled("div")`
  margin: 20px 0 0 0;
`;

export default SignUp;
