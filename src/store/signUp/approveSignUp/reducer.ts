import { INPUT_ONCHANGE } from "./actions";

const initialState: any = {
  code: "",
};

export const approveSignUpReducer = (
  state: any = initialState,
  actions: any
) => {
  switch (actions.type) {
    case INPUT_ONCHANGE:
      return { ...state, code: actions.payload };
    default:
      return state;
  }
};
