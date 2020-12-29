import React, { ChangeEvent, FC } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
// import StateHOC from "../HOC/StateHOC";
import {
  openModal,
  closeModal,
  cancelModal,
  createTask,
  formNameField,
  formEmailField,
  formDescriptionField,
} from "../../Actions";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../types/Types";

const CreateItemFormModal: FC = () => {
  const state = useSelector((state: StateType) => state);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(openModal())}>+</button>
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
        <button onClick={() => dispatch(closeModal())}>close</button>
        <AddForm>
          <label>
            Name
            <input
              type="text"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                return dispatch(formNameField(e.target.value));
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                return dispatch(formEmailField(e.target.value));
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                return dispatch(formDescriptionField(e.target.value));
              }}
            />
            <br />
            {state.validation.description ? (
              <span style={{ color: "red" }}>
                The Description must contain min 1 symbol
              </span>
            ) : null}
          </label>
          <button onClick={() => dispatch(createTask())}>CreateTask</button>
          <button onClick={() => dispatch(cancelModal())}>Cancel</button>
        </AddForm>
      </ReactModal>
    </>
  );
};

const AddForm = styled("div")`
  display: flex;
  flex-direction: column;
`;

export default CreateItemFormModal;
