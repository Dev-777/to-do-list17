import React, { useEffect } from "react";
import ToDoList from "./Components/ToDoList";
import styled from "styled-components";
import Background from "./assets/images/seamless-pattern-colored-pencils-vector-876060.jpg";
import Buttons from "./Components/Buttons";
import ConfirmModal from "./Components/modals/ConfirmModal";
import Loading from "./Components/Loading";
import { getFunc } from "./Api";
import StateHOC from "./Components/HOC/StateHOC";

const App = ({ state, dispatch }) => {
  useEffect(() => {
    (async () => {
      const val = await getFunc();
      await console.log(val, "aaaa");
    })();
  });

  return (
    <AppWrapper className="App">
      <Buttons />
      <ConfirmModal />
      <Loading />
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
