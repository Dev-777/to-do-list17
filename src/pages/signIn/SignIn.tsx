import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { email, password } from "../../store/reducers/signIn/actions";

const SignIn: FC = () => {
  const state = useSelector((state: any) => state.signInReducer);
  const dispatch = useDispatch();

  const onchange: any = (event: string, dispatch: any, actions: any) => {
    dispatch(actions(event));
  };
  const click = () => {};

  return (
    <>
      <SignInWrapper>
        <Label>
          Email <br />
          <Input
            type="text"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onchange(event.target.value, dispatch, email)
            }
          />
        </Label>
        <Label>
          Password
          <br />
          <Input
            type="password"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onchange(event.target.value, dispatch, password)
            }
          />
        </Label>
        <Button onClick={click}>Sign In</Button>
      </SignInWrapper>
    </>
  );
};

const SignInWrapper = styled("div")`
  width: 250px;
  height: 320px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
  margin: 15px auto;
`;

const Button = styled("div")`
  align-self: flex-end;
  width: 100px;
  box-shadow: 0 10px 14px -7px #276873;
  background: #599bb3 linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial, serif;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  text-decoration: none;
  text-shadow: 0 1px 0 #3d768a;
  margin: 10px 46px 0 0;

  &:hover {
    background: #408c99 linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

const Input = styled("input")`
  padding: 7px;
  font-size: 16px;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #ffffff;
  color: #000000;
  border-style: solid;
  border-radius: 5px;
  margin: 5px 0 0 0;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(66, 66, 66, 0.75);
  }
`;
const Label = styled("label")`
  margin: 15px 0 0 10px;
`;

export default SignIn;
