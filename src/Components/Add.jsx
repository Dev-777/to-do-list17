import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import StateHOC from "./HOC/StateHOC";
import {
  OpenModal,
  CloseModal,
  CancelModal,
  CreateModal,
} from "../Actions/Actions";

const Add = ({ state, dispatch }) => {
  return (
    <>
      <button onClick={() => dispatch(OpenModal)}>ADD button</button>
      <ReactModal
        isOpen={state.createTaskModal.isOpen}
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
            <input type="text" />
          </label>
          <label>
            Email
            <input type="email" />
          </label>
          <label>
            Description
            <input type="text" />
          </label>
          <button onClick={() => dispatch(CreateModal)}>Create</button>
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
