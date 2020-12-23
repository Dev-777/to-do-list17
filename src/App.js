import React, { useMemo } from "react";
import ToDoList from "./Components/ToDoList";
import styled from "styled-components";
import Background from "./assets/images/seamless-pattern-colored-pencils-vector-876060.jpg";
import Buttons from "./Components/Buttons";
import ConfirmModal from "./Components/modals/ConfirmModal";
import Loading from "./Components/Loading";
import { deleteFunc, getFunc, postFunc, putFunc } from "./Api";
import StateHOC from "./Components/HOC/StateHOC";
import { loadData } from "./Actions";

const App = ({ state, dispatch }) => {
  useMemo(() => {
    dispatch(loadData());
    console.log(
      "change---------------------------------------------------------------------------"
    );
  }, [state.loadList]);

  return (
    <AppWrapper className="App">
      <button onClick={getFunc}>get</button>
      <button onClick={postFunc}>post</button>
      <button onClick={putFunc}>put</button>
      <button onClick={deleteFunc}>del</button>
      {!state.loadList ? <Loading /> : null}
      <Buttons />
      <ConfirmModal />
      <ToDoList />
    </AppWrapper>
  );
};
const AppWrapper = styled("div")`
  width: 100%;
  height: 100vh;
  background-image: url(${Background});
`;

export default StateHOC(App);
