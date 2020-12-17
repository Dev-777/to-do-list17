import React from "react";
import Add from "./modals/CreateItemFormModal";

const Buttons = () => {
  return (
    <>
      <Add />
      <button>filter</button>
      <button>SignUp</button>
      <button>SignIn</button>
      <button>Exit Admin Mode</button>
    </>
  );
};

export default Buttons;
