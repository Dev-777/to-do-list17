export const EMAIL = "EMAIL";
export const PASSWORD = "PASSWORD";

export const email = (value: string) => {
  return { type: EMAIL, payload: value };
};

export const password = (value: string) => {
  return { type: PASSWORD, payload: value };
};
