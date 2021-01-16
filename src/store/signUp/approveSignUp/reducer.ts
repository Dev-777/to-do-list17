import { INPUT_ONCHANGE, SUCCESS } from "./actions";

const initialState: any = {
  code: "",
  success: false,
};

export const approveSignUpReducer = (
  state: any = initialState,
  actions: any
) => {
  switch (actions.type) {
    case INPUT_ONCHANGE:
      return { ...state, code: actions.payload };
    case SUCCESS:
      return { ...state, registrationSuccess: true };
    default:
      return state;
  }
};
