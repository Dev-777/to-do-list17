import React from "react";
import ReactModal from "react-modal";
import StateHOC from "../HOC/StateHOC";
import { cancelConfirmModal, confirmConfirmModal } from "../../Actions";

const ConfirmModal = ({ state, dispatch }) => {
  return (
    <>
      <ReactModal
        isOpen={state.confirmModalIsOpen}
        ariaHideApp={false}
        style={{
          overlay: {},
          content: {
            opacity: 0.8,
            width: 300,
            height: 70,
            margin: "200px auto",
            display: "flex",
          },
        }}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={false}
      >
        <button onClick={() => dispatch(confirmConfirmModal())}>Confirm</button>
        <button onClick={() => dispatch(cancelConfirmModal())}>Cancel</button>
      </ReactModal>
    </>
  );
};

export default StateHOC(ConfirmModal);
