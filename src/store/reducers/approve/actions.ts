export const POST_CODE: string = "POST_CODE";
export const INPUT_ONCHANGE: string = "INPUT_ONCHANGE";
export const SUCCESS_MESSAGE: string = "SUCCESS_MESSAGE";
export const SHOW_LOADING: string = "SHOW_LOADING";

export const inputOnchange: any = (value: string) => {
  return { type: INPUT_ONCHANGE, payload: value };
};
export const postCode = () => {
  return { type: POST_CODE };
};
export const successMessage = () => {
  return { type: SUCCESS_MESSAGE };
};
export const showLoading = () => {
  return { type: SHOW_LOADING };
};
