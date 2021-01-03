import React, { FC } from "react";
import ReactModal from "react-modal";
import { cancelConfirmModal, confirmConfirmModal } from "../../store/appActionsAndReducers/Actions";
import { useDispatch, useSelector } from "react-redux";

const ConfirmModal: FC = () => {
  const state = useSelector((state: any) => state.reducer);  
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
