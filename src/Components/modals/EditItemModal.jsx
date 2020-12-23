import React from "react";
import ReactModal from "react-modal";
import StateHOC from "../HOC/StateHOC";
import {
  closeEditItemModal,
  editModalSaveButton,
  editOnchange,
  saveEditedText,
} from "../../Actions";

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
            return dispatch(editOnchange(e.target.value));
          }}
        />
        <div>
          <button onClick={() => dispatch(editModalSaveButton())}>Save</button>
          <button onClick={() => dispatch(closeEditItemModal())}>Cancel</button>
        </div>
      </ReactModal>
    </>
  );
};

export default StateHOC(EditItemModal);
