import React from "react";
import StateHOC from "./HOC/StateHOC";
import ToDoItem from "./ToDoItem";
import styled from "styled-components";
import { Provider } from "react-redux";
import { CreateTask } from "../Actions/Actions";
import EditItemModal from "./modals/EditItemModal";

const ToDoList = ({ state, dispatch }) => {
  return (
    <>
      <EditItemModal />
      <ListHeader>
        <ToDoItem
          name={"name"}
          email={"email"}
          description={"description"}
          status={"status"}
        />
      </ListHeader>
      {state.itemList.map((i, index) => (
        <ToDoItem
          key={new Date() + index}
          name={i.name}
          email={i.email}
          description={i.description}
          status={i.status}
          index={index}
        />
      ))}
    </>
  );
};

const ListHeader = styled("div")`
  background-color: gray;
`;

export default StateHOC(ToDoList);
