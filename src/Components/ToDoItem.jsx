import React from "react";
import StateHOC from "./HOC/StateHOC";
import styled from "styled-components";
import { Edit } from "../Actions/Actions";

const ToDoItem = ({
  state,
  dispatch,
  name,
  email,
  description,
  status,
  index,
}) => {
  return (
    <>
      <Item>
        <ItemElement>{name}</ItemElement>
        <ItemElement>{email}</ItemElement>
        <ItemElement>{description}</ItemElement>
        <ItemElement>{status}</ItemElement>
        <button
          onClick={() => {
            Edit.index = index;
            return dispatch(Edit);
          }}
        >
          Edit
        </button>
      </Item>
    </>
  );
};

const Item = styled("div")`
  display: flex;
`;

const ItemElement = styled("div")`
  flex-grow: 5;
  height: 50px;
`;
export default StateHOC(ToDoItem);
