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

// /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(state.item.email)

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
  state.validation = { ...initialState.validation };
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

export const reducer = (state = initialState, action) => {
  console.log(state, "state");
  switch (action.type) {
    case "OpenModal":
      return openModalFunc(state);
    case "CloseModal":
      return closeModalFunc(state);
    case "CancelModal":
      state.validation = { ...initialState.validation };
      return cancelModalFunc(state);

    case "CancelConfirmModal":
      return cancelConfirmModalFunc(state);
    case "ConfirmConfirmModal":
      return confirmConfirmModalFunc(state);
    case "FormNameField":
      return { ...state, item: { ...state.item, name: action.value } };
    case "FormEmailField":
      return { ...state, item: { ...state.item, email: action.value } };
    case "FormDescriptionField":
      return { ...state, item: { ...state.item, description: action.value } };
    case "CloseEditItemModal":
      return { ...state, editItemModalIsOpen: !state.editItemModalIsOpen };
    case "Edit":
      return editFunc(state, action);
    case "SaveEditedText":
      return saveEditedTextFunc(state);
    case "EditOnchange":
      return editOnchangeFunc(state, action);
    case "CreateTask":
      if (
        state.item.name &&
        /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(state.item.email) &&
        state.item.description
      ) {
        return { ...state, confirmModalIsOpen: !state.confirmModalIsOpen };
      } else {
        if (!state.item.name && !state.validation.name) {
          state.validation.name = !state.validation.name;
        } else if (state.item.name && state.validation.name) {
          state.validation.name = !state.validation.name;
        }

        if (!state.item.description && !state.validation.description) {
          state.validation.name = !state.validation.description;
        } else if (state.item.description && state.validation.description) {
          state.validation.description = !state.validation.description;
        }
      }
      return { ...state };

    default:
      return state;
  }
};

// validation: {
//   name: false,
//     email: false,
//     description: false,
// },
