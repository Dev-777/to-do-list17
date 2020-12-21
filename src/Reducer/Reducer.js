import {
  openModalFunc,
  closeModalFunc,
  cancelModalFunc,
  cancelConfirmModalFunc,
  confirmConfirmModalFunc,
  formNameFieldFunc,
  formEmailFieldFunc,
  formDescriptionFieldFunc,
  closeEditItemModalFunc,
  editFunc,
  saveEditedTextFunc,
  editOnchangeFunc,
  validationFunc,
} from "./ReducerFunctions";

const initialState = {
  createTaskModalIsOpen: false,
  confirmModalIsOpen: false,
  editItemModalIsOpen: false,
  item: {
    name: "",
    email: "",
    description: "",
    status: "In progress",
  },
  itemList: [],
  validation: {
    name: false,
    email: false,
    description: false,
  },

  editModal: {
    editModalDefaultValue: "",
    editableItemIndex: "",
  },
};

export const reducer = (state = initialState, action) => {
  console.log(state, "state");
  switch (action.type) {
    case "PUT_DATA":
      return { ...state, itemList: [...state.itemList, action.dataFromServer] };
    case "OPEN_MODAL":
      return openModalFunc(state);
    case "CLOSE_MODAL":
      return closeModalFunc(state);
    case "CANCEL_MODAL":
      return cancelModalFunc(state);
    case "CANCEL_CONFIRM_MODAL":
      return cancelConfirmModalFunc(state);
    case "CONFIRM_CONFIRM_MODAL":
      return confirmConfirmModalFunc(state);
    case "FORM_NAME_FIELD":
      return formNameFieldFunc(state, action);
    case "FORM_EMAIL_FIELD":
      return formEmailFieldFunc(state, action);
    case "FORM_DESCRIPTION_FIELD":
      return formDescriptionFieldFunc(state, action);
    case "CLOSE_EDIT_ITEM_MODAL":
      return closeEditItemModalFunc(state);
    case "EDIT":
      return editFunc(state, action);
    case "SAVE_EDITED_TEXT":
      return saveEditedTextFunc(state);
    case "EDIT_ONCHANGE":
      return editOnchangeFunc(state, action);
    case "CREATE_TASK":
      return validationFunc(state);

    default:
      return state;
  }
};
