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

const cancelConfirmModalFunc = (state) => {
  return { ...state, confirmModalIsOpen: !state.confirmModalIsOpen };
};
const confirmConfirmModalFunc = (state) => {
  return {
    ...state,
    itemList: [...state.itemList, state.item],
    confirmModalIsOpen: !state.confirmModalIsOpen,
    createTaskModalIsOpen: !state.createTaskModalIsOpen,
  };
};
const openModalFunc = (state) => {
  return { ...state, createTaskModalIsOpen: !state.createTaskModalIsOpen };
};
const closeModalFunc = (state) => {
  state.validation = { ...initialState.validation };
  return { ...state, createTaskModalIsOpen: !state.createTaskModalIsOpen };
};
const cancelModalFunc = (state) => {
  state.validation = { name: false, email: false, description: false };
  return { ...state, createTaskModalIsOpen: !state.createTaskModalIsOpen };
};
const editFunc = (state, action) => {
  state.editModal.editModalDefaultValue =
    state.itemList[action.index].description;
  state.editModal.editableItemIndex = action.index;
  return { ...state, editItemModalIsOpen: !state.editItemModalIsOpen };
};
const saveEditedTextFunc = (state) => {
  state.itemList[state.editModal.editableItemIndex].description =
    state.editModal.editModalDefaultValue;
  return { ...state, editItemModalIsOpen: !state.editItemModalIsOpen };
};
const editOnchangeFunc = (state, action) => {
  return {
    ...state,
    editModal: { ...state.editModal, editModalDefaultValue: action.value },
  };
};
const validationFunc = (state) => {
  if (
    state.item.name &&
    /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(state.item.email) &&
    state.item.description
  ) {
    state.validation = { name: false, email: false, description: false };
    return { ...state, confirmModalIsOpen: !state.confirmModalIsOpen };
  } else {
    if (!state.item.name && !state.validation.name) {
      state.validation.name = !state.validation.name;
    } else if (state.item.name && state.validation.name) {
      state.validation.name = !state.validation.name;
    }
    if (!state.item.description && !state.validation.description) {
      state.validation.description = !state.validation.description;
    } else if (state.item.description && state.validation.description) {
      state.validation.description = !state.validation.description;
    }
    if (
      !/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(state.item.email) &&
      !state.validation.email
    ) {
      state.validation.email = !state.validation.email;
    } else if (
      /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(state.item.email) &&
      state.validation.email
    ) {
      state.validation.email = !state.validation.email;
    }
  }
  return { ...state };
};
const formNameFieldFunc = (state, action) => {
  return { ...state, item: { ...state.item, name: action.value } };
};
const formEmailFieldFunc = (state, action) => {
  return { ...state, item: { ...state.item, email: action.value } };
};
const formDescriptionFieldFunc = (state, action) => {
  return { ...state, item: { ...state.item, description: action.value } };
};
const closeEditItemModalFunc = (state) => {
  return { ...state, editItemModalIsOpen: !state.editItemModalIsOpen };
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
