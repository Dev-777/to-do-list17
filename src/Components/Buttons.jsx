import React from "react";
import Add from "./modals/CreateItemFormModal";
import { loadData } from "../Actions";
import { useDispatch } from "react-redux";

const Buttons = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(loadData());
  };
  return (
    <>
      <Add />
      <button onClick={onClick}>filter</button>
      <button>SignUp</button>
      <button>SignIn</button>
      <button>Exit Admin Mode</button>
    </>
  );
};

export default Buttons;
