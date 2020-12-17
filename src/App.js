import React from "react";
import { store } from "./Store/Store";
import ToDoList from "./Components/ToDoList";
import { Provider } from "react-redux";
import styled from "styled-components";
import Background from "./assets/images/seamless-pattern-colored-pencils-vector-876060.jpg";
import axios from "axios";
import Buttons from "./Components/Buttons";
import ConfirmModal from "./Components/modals/ConfirmModal";

const App = () => {
  const getUrl =
    "https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=TRE";
  const postUrl =
    "https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=TRE";

  const funcGet = () => {
    axios.get(getUrl).then((res) => console.log(res, "GET"));
  };
  const funcPost = ({ state, dispatch }) => {
    const form = new FormData();
    form.append("username", "ExampleTRE");
    form.append("email", "exampleTRE@example.com");
    form.append("text", "Some textTRE");

    axios({
      url: `${postUrl}`,
      crossDomain: true,
      method: "POST",
      mimeType: "multipart/form-data",
      contentType: false,
      processData: false,
      data: form,
      dataType: "json",
      success: (data) => {
        console.log(data);
      },
    }).then((res) => console.log(res, "POST"));
  };

  return (
    <AppWrapper className="App">
      <Provider store={store}>
        <Buttons />
        <ConfirmModal />
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
