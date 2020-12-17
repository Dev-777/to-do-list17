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
    case "OpenModal":
      return openModalFunc(state);
    case "CloseModal":
      return closeModalFunc(state);
    case "CancelModal":
      return cancelModalFunc(state);
    case "CancelConfirmModal":
      return cancelConfirmModalFunc(state);
    case "ConfirmConfirmModal":
      return confirmConfirmModalFunc(state);
    case "FormNameField":
      return formNameFieldFunc(state, action);
    case "FormEmailField":
      return formEmailFieldFunc(state, action);
    case "FormDescriptionField":
      return formDescriptionFieldFunc(state, action);
    case "CloseEditItemModal":
      return closeEditItemModalFunc(state);
    case "Edit":
      return editFunc(state, action);
    case "SaveEditedText":
      return saveEditedTextFunc(state);
    case "EditOnchange":
      return editOnchangeFunc(state, action);
    case "CreateTask":
      return validationFunc(state);

    default:
      return state;
  }
};
