import React from "react";
import ToDoItem from "./ListItem";
import styled from "styled-components";
import EditItemModal from "./modals/EditItemModal";
import ListHeader from "./ListHeader";
import { useSelector } from "react-redux";

const ToDoList: React.FC = () => {
  const state = useSelector((state: any) => state.reducer);  
  return (
    <>
      <EditItemModal />
      <ToDo>
        <ListHeader />
        <List>
          {state.itemList.map((i, index) => (
            <ToDoItem
              key={String(new Date()) + index}
              name={i.name}
              email={i.email}
              description={i.description}
              status={i.status}
              index={index}
            />
          ))}
        </List>
      </ToDo>
    </>
  );
};

const ToDo = styled("div")`
  width: 50%;
  margin: 30px auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
`;

const List = styled("div")`
  overflow: overlay;
  height: 70vh;
`;

export default ToDoList;
