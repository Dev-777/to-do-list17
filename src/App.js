import React, { useMemo } from "react";
import ToDoList from "./Components/ToDoList";
import styled from "styled-components";
import Background from "./assets/images/seamless-pattern-colored-pencils-vector-876060.jpg";
import ConfirmModal from "./Components/modals/ConfirmModal";
import Loading from "./Components/Loading";
import StateHOC from "./Components/HOC/StateHOC";
import { loadData } from "./Actions";
import AppHeader from "./Components/AppHeader";
import TTT from "./TTT";

const App = ({ state, dispatch }) => {
  useMemo(() => {
    dispatch(loadData());
  }, [state.loadList]);

  return (
    <AppWrapper className="App">
      <TTT />
      <AppHeader />
      {!state.loadList ? <Loading /> : null}
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
