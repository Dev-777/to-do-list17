import React, { useMemo } from "react";
import ToDoList from "./Components/ToDoList";
import styled from "styled-components";
import Background from "./assets/images/seamless-pattern-colored-pencils-vector-876060.jpg";
import ConfirmModal from "./Components/modals/ConfirmModal";
import Loading from "./Components/loadings/Loading";
import { loadData } from "./store/reducers/appActionsAndReducers/Actions";
import AppHeader from "./Components/AppHeader";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const App = () => {
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  useMemo(() => {
    dispatch(loadData());
  }, [state.loadList]);

  const postRequest = () => {
    axios
      .post("https://sign-up-backend.herokuapp.com/app/signup", {
        fullName: "TestName~~~!1",
        username: "Test!1",
        email: "test@email.com1",
        password: "testPass1",
      })
      .then(() => console.log("post done"));
  };

  const getRequest = () => {
    axios
      .get("https://sign-up-backend.herokuapp.com/app/data17")
      .then((data) => console.log(data, "get"))
      .catch((err) => console.log(err, "error~~~"));
  };

  const deleteRequest = () => {
    axios
      .delete(
        "https://sign-up-backend.herokuapp.com/app/data1723/5fe882ef5f8789b2bde2dd64"
      )
      .then(() => console.log("delete done"));
  };

  return (
    <AppWrapper className="App">
      <button onClick={postRequest}>Test post</button>
      <button onClick={getRequest}>Test get</button>
      <button onClick={deleteRequest}>Delete</button>
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
