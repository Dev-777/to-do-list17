import React, { ChangeEvent } from "react";
import ReactModal from "react-modal";
import {
  closeEditItemModal,
  editModalSaveButton,
  editOnchange,
} from "../../store/appActionsAndReducers/Actions";
import { useDispatch, useSelector } from "react-redux";

const EditItemModal = () => {
  const state = useSelector((state: any) => state.reducer);
  const dispatch = useDispatch();
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
          rows={10}
          cols={30}
          defaultValue={state.editModal.editModalDefaultValue}
          style={{ resize: "none" }}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
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

export default EditItemModal;
