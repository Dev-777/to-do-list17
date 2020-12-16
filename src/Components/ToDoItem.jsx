import React from "react";
import StateHOC from "./HOC/StateHOC";
import styled from "styled-components";

const ToDoItem = ({
  state,
  dispatch,
  name,
  email,
  taskDescription,
  status,
  editTask,
}) => {
  return (
    <>
      <Item>
        <ItemElement>{name}</ItemElement>
        <ItemElement>{email}</ItemElement>
        <ItemElement>{taskDescription}</ItemElement>
        <ItemElement>{status}</ItemElement>
        <ItemElement>{editTask}</ItemElement>
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
