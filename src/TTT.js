import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TTT = () => {
  const state = useSelector((state) => state);
  console.log(state, "hoock state");
  const dispatch = useDispatch();

  return (
    <>
      <h1 onClick={() => dispatch({ type: "testName" })}>Test 123</h1>
    </>
  );
};

export default TTT;
