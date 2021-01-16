export const POST_CODE: string = "POST_CODE";
export const INPUT_ONCHANGE: string = "INPUT_ONCHANGE";
export const SUCCESS: string = "SUCCESS";

export const inputOnchange: any = (value: string) => {
  return { type: INPUT_ONCHANGE, payload: value };
};
export const postCode = () => {
  return { type: POST_CODE };
};
export const success = () => {
  return { type: SUCCESS };
};
