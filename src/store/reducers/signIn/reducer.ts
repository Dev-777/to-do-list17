import { EMAIL, PASSWORD } from "./actions";

const initialState: any = {
  email: "",
  password: "",
};

export const signInReducer: any = (state: any = initialState, actions: any) => {
  switch (actions.type) {
    case EMAIL:
      return { ...state, email: actions.payload };
    case PASSWORD:
      return { ...state, password: actions.payload };

    default:
      return state;
  }
};
