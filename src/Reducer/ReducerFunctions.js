export const cancelConfirmModalFunc = (state) => {
  return { ...state, confirmModalIsOpen: !state.confirmModalIsOpen };
};
export const confirmConfirmModalFunc = (state) => {
  return {
    ...state,
    confirmModalIsOpen: !state.confirmModalIsOpen,
    createTaskModalIsOpen: !state.createTaskModalIsOpen,
  };
};
export const openModalFunc = (state) => {
  return { ...state, createTaskModalIsOpen: !state.createTaskModalIsOpen };
};
export const closeModalFunc = (state) => {
  state.validation = { name: false, email: false, description: false };
  return { ...state, createTaskModalIsOpen: !state.createTaskModalIsOpen };
};
export const cancelModalFunc = (state) => {
  state.validation = { name: false, email: false, description: false };
  return { ...state, createTaskModalIsOpen: !state.createTaskModalIsOpen };
};
export const editFunc = (state, action) => {
  state.editModal.editModalDefaultValue =
    state.itemList[action.index].description;
  state.editModal.editableItemIndex = action.index;
  return { ...state, editItemModalIsOpen: !state.editItemModalIsOpen };
};
export const saveEditedTextFunc = (state) => {
  state.itemList[state.editModal.editableItemIndex].description =
    state.editModal.editModalDefaultValue;
  return { ...state, editItemModalIsOpen: !state.editItemModalIsOpen };
};
export const editOnchangeFunc = (state, action) => {
  return {
    ...state,
    editModal: { ...state.editModal, editModalDefaultValue: action.value },
  };
};
export const validationFunc = (state) => {
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
export const formNameFieldFunc = (state, action) => {
  return { ...state, item: { ...state.item, name: action.value } };
};
export const formEmailFieldFunc = (state, action) => {
  return { ...state, item: { ...state.item, email: action.value } };
};
export const formDescriptionFieldFunc = (state, action) => {
  return { ...state, item: { ...state.item, description: action.value } };
};
export const closeEditItemModalFunc = (state) => {
  return { ...state, editItemModalIsOpen: !state.editItemModalIsOpen };
};
