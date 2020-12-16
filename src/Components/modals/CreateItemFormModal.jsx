import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import StateHOC from "../HOC/StateHOC";
import {
  OpenModal,
  CloseModal,
  CancelModal,
  CreateTask,
  FormNameField,
  FormEmailField,
  FormDescriptionField,
} from "../../Actions/Actions";

const Add = ({ state, dispatch }) => {
  return (
    <>
      <button onClick={() => dispatch(OpenModal)}>ADD button</button>
      <ReactModal
        isOpen={state.createTaskModalIsOpen}
        ariaHideApp={false}
        style={{
          overlay: {},
          content: {
            opacity: 0.8,
            width: 400,
            height: 450,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
          },
        }}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={false}
      >
        <button onClick={() => dispatch(CloseModal)}>close</button>
        <AddForm>
          <label>
            Name
            <input
              type="text"
              onChange={(e) => {
                FormNameField.value = e.target.value;
                return dispatch(FormNameField);
              }}
            />
            <br />
            {state.validation.name ? (
              <span style={{ color: "red" }}>
                The name must contain min 1 symbol
              </span>
            ) : null}
          </label>
          <label>
            Email
            <input
              type="email"
              onChange={(e) => {
                FormEmailField.value = e.target.value;
                return dispatch(FormEmailField);
              }}
            />
            <br />
            {state.validation.email ? (
              <span style={{ color: "red" }}>The Email is invalid</span>
            ) : null}
          </label>
          <label>
            Description
            <input
              type="text"
              onChange={(e) => {
                FormDescriptionField.value = e.target.value;
                return dispatch(FormDescriptionField);
              }}
            />
            <br />
            {state.validation.description ? (
              <span style={{ color: "red" }}>
                The Description must contain min 1 symbol
              </span>
            ) : null}
          </label>
          <button onClick={() => dispatch(CreateTask)}>CreateTask</button>
          <button onClick={() => dispatch(CancelModal)}>Cancel</button>
        </AddForm>
      </ReactModal>
    </>
  );
};

const AddForm = styled("div")`
  display: flex;
  flex-direction: column;
`;

export default StateHOC(Add);
