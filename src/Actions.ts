export const OPEN_MODAL: string = "OPEN_MODAL";
export const CLOSE_MODAL: string = "CLOSE_MODAL";
export const CANCEL_MODAL: string = "CANCEL_MODAL";
export const CREATE_TASK: string = "CREATE_TASK";
export const CONFIRM_CONFIRM_MODAL: string = "CONFIRM_CONFIRM_MODAL";
export const CANCEL_CONFIRM_MODAL: string = "CANCEL_CONFIRM_MODAL";
export const FORM_NAME_FIELD: string = "FORM_NAME_FIELD";
export const FORM_EMAIL_FIELD: string = "FORM_EMAIL_FIELD";
export const FORM_DESCRIPTION_FIELD: string = "FORM_DESCRIPTION_FIELD";
export const EDIT: string = "EDIT";
export const CLOSE_EDIT_ITEM_MODAL: string = "CLOSE_EDIT_ITEM_MODAL";
export const SAVE_EDITED_TEXT: string = "SAVE_EDITED_TEXT";
export const EDIT_ONCHANGE: string = "EDIT_ONCHANGE";
export const PUT_DATA: string = "PUT_DATA";
export const LOAD_DATA: string = "LOAD_DATA";
export const PUSH_DATA: string = "PUSH_DATA";
export const EDIT_MODAL_SAVE_BUTTON: string = "EDIT_MODAL_SAVE_BUTTON";

export const editModalSaveButton: object = () => {
  return { type: EDIT_MODAL_SAVE_BUTTON };
};

export const editOnchange: object = (VALUE: string) => {
  return { type: EDIT_ONCHANGE, value: VALUE };
};
export const saveEditedText: object = () => {
  return { type: SAVE_EDITED_TEXT };
};
export const edit: object = (INDEX: any) => {
  return { type: EDIT, index: INDEX };
};
export const closeEditItemModal: object = () => {
  return { type: CLOSE_EDIT_ITEM_MODAL };
};
export const formDescriptionField: object = (VALUE: string) => {
  return { type: FORM_DESCRIPTION_FIELD, value: VALUE };
};
export const formEmailField: object = (VALUE: string) => {
  return { type: FORM_EMAIL_FIELD, value: VALUE };
};
export const formNameField: object = (VALUE: string) => {
  return { type: FORM_NAME_FIELD, value: VALUE };
};
export const cancelConfirmModal: object = () => {
  return { type: CANCEL_CONFIRM_MODAL };
};
export const confirmConfirmModal: object = () => {
  return { type: CONFIRM_CONFIRM_MODAL };
};
export const createTask: object = () => {
  return { type: CREATE_TASK };
};
export const cancelModal: object = () => {
  return { type: CANCEL_MODAL };
};
export const closeModal: object = () => {
  return { type: CLOSE_MODAL };
};
export const openModal: object = () => {
  return { type: OPEN_MODAL };
};
export const putData: object = (dataFromServer: any) => {
  return {
    type: PUT_DATA,
    dataFromServer: dataFromServer,
  };
};
export const loadData = () => {
  return { type: LOAD_DATA };
};

export const pushData = (dataForServer: any) => {
  return {
    type: PUSH_DATA,
  };
};
