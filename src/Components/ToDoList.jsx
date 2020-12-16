import React from "react";
import StateHOC from "./HOC/StateHOC";
import ToDoItem from "./ToDoItem";
import styled from "styled-components";
import Add from "./Add";

const ToDoList = ({ state, dispatch }) => {
  return (
    <>
      <ListHeader>
        <ToDoItem
          name={"name"}
          email={"email"}
          taskDescription={"taskDescription"}
          status={"status"}
          editTask={"editTask"}
        />
      </ListHeader>
    </>
  );
};

const ListHeader = styled("div")`
  background-color: gray;
`;

export default StateHOC(ToDoList);
