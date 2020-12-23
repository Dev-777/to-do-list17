export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const CANCEL_MODAL = "CANCEL_MODAL";
export const CREATE_TASK = "CREATE_TASK";
export const CONFIRM_CONFIRM_MODAL = "CONFIRM_CONFIRM_MODAL";
export const CANCEL_CONFIRM_MODAL = "CANCEL_CONFIRM_MODAL";
export const FORM_NAME_FIELD = "FORM_NAME_FIELD";
export const FORM_EMAIL_FIELD = "FORM_EMAIL_FIELD";
export const FORM_DESCRIPTION_FIELD = "FORM_DESCRIPTION_FIELD";
export const EDIT = "EDIT";
export const CLOSE_EDIT_ITEM_MODAL = "CLOSE_EDIT_ITEM_MODAL";
export const SAVE_EDITED_TEXT = "SAVE_EDITED_TEXT";
export const EDIT_ONCHANGE = "EDIT_ONCHANGE";
export const PUT_DATA = "PUT_DATA";
export const LOAD_DATA = "LOAD_DATA";
export const PUSH_DATA = "PUSH_DATA";
export const MOUNT_DISPATCH = "MOUNT_DISPATCH";

export const mountDispatch = () => {
  return { type: MOUNT_DISPATCH };
};

export const editOnchange = (VALUE) => {
  return { type: EDIT_ONCHANGE, value: VALUE };
};
export const saveEditedText = () => {
  return { type: SAVE_EDITED_TEXT };
};
export const edit = (INDEX) => {
  return { type: EDIT, index: INDEX };
};
export const closeEditItemModal = () => {
  return { type: CLOSE_EDIT_ITEM_MODAL };
};
export const formDescriptionField = (VALUE) => {
  return { type: FORM_DESCRIPTION_FIELD, value: VALUE };
};
export const formEmailField = (VALUE) => {
  return { type: FORM_EMAIL_FIELD, value: VALUE };
};
export const formNameField = (VALUE) => {
  return { type: FORM_NAME_FIELD, value: VALUE };
};
export const cancelConfirmModal = () => {
  return { type: CANCEL_CONFIRM_MODAL };
};
export const confirmConfirmModal = () => {
  return { type: CONFIRM_CONFIRM_MODAL };
};
export const createTask = () => {
  return { type: CREATE_TASK };
};
export const cancelModal = () => {
  return { type: CANCEL_MODAL };
};
export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
export const openModal = () => {
  return { type: OPEN_MODAL };
};
export const putData = (dataFromServer) => {
  return {
    type: PUT_DATA,
    dataFromServer: dataFromServer,
  };
};
export const loadData = () => {
  return { type: LOAD_DATA };
};

export const pushData = (dataForServer) => {
  return {
    type: PUSH_DATA,
  };
};
