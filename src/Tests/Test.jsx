import React from "react";
import {
  deleteFuncTest,
  getFuncTest,
  postFuncTest,
  putFuncTest,
} from "./TestApi";

const Test = () => {
  return (
    <>
      <button onClick={getFuncTest}>get</button>
      <button onClick={postFuncTest}>post</button>
      <button onClick={putFuncTest}>put</button>
      <button onClick={deleteFuncTest}>del</button>
    </>
  );
};

export default Test;
