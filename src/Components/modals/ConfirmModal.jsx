import React from "react";
import ReactModal from "react-modal";
import { cancelConfirmModal, confirmConfirmModal } from "../../Actions";
import { useDispatch, useSelector } from "react-redux";

const ConfirmModal = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
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

export default ConfirmModal;
