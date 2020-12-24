import React, { useMemo } from "react";
import ToDoList from "./Components/ToDoList";
import styled from "styled-components";
import Background from "./assets/images/seamless-pattern-colored-pencils-vector-876060.jpg";
import ConfirmModal from "./Components/modals/ConfirmModal";
import Loading from "./Components/Loading";
import { loadData } from "./Actions";
import AppHeader from "./Components/AppHeader";

import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useMemo(() => {
    dispatch(loadData());
  }, [state.loadList]);

  return (
    <AppWrapper className="App">
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

export default App;
