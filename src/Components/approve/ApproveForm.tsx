import React, { ChangeEvent, FC } from "react";
import {
  inputOnchange,
  postCode,
} from "../../store/signUp/approveSignUp/actions";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const ApproveForm: FC = () => {
  const dispatch = useDispatch();
  const state: any = useSelector((state: any) => state.approveSignUpReducer);

  const click: any = () => {
    dispatch(postCode());
  };
  const onchange = (event: string) => {
    dispatch(inputOnchange(event));
  };
  return (
    <>
      <FormWrapper>
        <p style={{ textAlign: "center" }}>
          We send the approval code in your email.
          <br />
          Please write that code in input to complete registration
        </p>
        <div>
          <label>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onchange(e.target.value)
              }
            />
          </label>
          <Button onClick={state.code ? click : null}>ok</Button>
        </div>
      </FormWrapper>
    </>
  );
};
const FormWrapper = styled("div")`
  width: 356px;
  height: 90px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled("input")`
  padding: 6px;
  font-size: 19px;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #ffffff;

  border-style: solid;
  border-radius: 6px;
  box-shadow: 0 0 5px rgba(66, 66, 66, 0.75);

  &:focus {
    outline: none;
  }
`;
const Button = styled("button")`
  box-shadow: inset 0 1px 0 0 #caefab;
  background: #77d42a linear-gradient(to bottom, #77d42a 5%, #5cb811 100%);
  border-radius: 6px;
  border: 1px solid #268a16;
  display: inline-block;
  cursor: pointer;
  color: #306108;
  font-family: Arial, serif;
  font-size: 19px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0 1px 0 #aade7c;
  margin: 0 0 0 10px;

  &:hover {
    background: #5cb811 linear-gradient(to bottom, #5cb811 5%, #77d42a 100%);
  }

  :active {
    position: relative;
    top: 1px;
  }
`;
export default ApproveForm;
