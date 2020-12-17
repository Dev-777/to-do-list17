import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import StateHOC from "../HOC/StateHOC";
import {
  CloseEditItemModal,
  ConfirmConfirmModal,
  EditOnchange,
  SaveEditedText,
} from "../../Actions/Actions";

const EditItemModal = ({ state, dispatch }) => {
  return (
    <>
      <ReactModal
        isOpen={state.editItemModalIsOpen}
        ariaHideApp={false}
        style={{
          overlay: {},
          content: {
            opacity: 0.8,
            width: 300,
            height: 150,
            margin: "200px auto",
            display: "flex",
          },
        }}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={false}
      >
        <textarea
          defaultValue={state.editModal.editModalDefaultValue}
          cols="30"
          rows="10"
          style={{ resize: "none" }}
          onChange={(e) => {
            EditOnchange.value = e.target.value;
            return dispatch(EditOnchange);
          }}
        />
        <div>
          <button onClick={() => dispatch(SaveEditedText)}>Save</button>
          <button onClick={() => dispatch(CloseEditItemModal)}>Cancel</button>
        </div>
      </ReactModal>
    </>
  );
};

export default StateHOC(EditItemModal);
