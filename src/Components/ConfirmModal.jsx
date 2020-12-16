import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import StateHOC from "./HOC/StateHOC";
import { CancelConfirmModal, CreateConfirmModal } from "../Actions/Actions";

const ConfirmModal = ({ state, dispatch }) => {
  return (
    <>
      <ReactModal
        // isOpen={state.confirmModal.isOpen}
        isOpen={true}
        ariaHideApp={false}
        style={{
          overlay: {},
          content: {
            opacity: 0.8,
            width: 300,
            height: 70,
            margin: "150px auto",
            display: "flex",
          },
        }}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={false}
      >
        <button onClick={() => dispatch(CreateConfirmModal)}>Create</button>
        <button onClick={() => dispatch(CancelConfirmModal)}>Cancel</button>
      </ReactModal>
    </>
  );
};

export default StateHOC(ConfirmModal);
