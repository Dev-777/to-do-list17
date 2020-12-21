import React from "react";
import { store } from "./Store";
import ToDoList from "./Components/ToDoList";
import { Provider } from "react-redux";
import styled from "styled-components";
import Background from "./assets/images/seamless-pattern-colored-pencils-vector-876060.jpg";
import Buttons from "./Components/Buttons";
import ConfirmModal from "./Components/modals/ConfirmModal";
import Loading from "./Components/Loading";

const App = () => {
  return (
    <AppWrapper className="App">
      <Provider store={store}>
        <Buttons />
        <ConfirmModal />
        <Loading />

        <ToDoList />
      </Provider>
    </AppWrapper>
  );
};
const AppWrapper = styled("div")`
  width: 100%;
  height: 100vh;
  background-image: url(${Background});
`;

export default App;
