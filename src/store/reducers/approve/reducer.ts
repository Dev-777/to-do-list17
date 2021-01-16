import { INPUT_ONCHANGE, SHOW_LOADING, SUCCESS_MESSAGE } from "./actions";

const initialState: any = {
  code: "",
  successMessage: false,
  showLoading: false,
  sendCodeButton: true,
};

export const approveReducer = (state: any = initialState, actions: any) => {
  switch (actions.type) {
    case INPUT_ONCHANGE:
      return { ...state, code: actions.payload };
    case SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: !state.successMessage,
        showLoading: !state.showLoading,
      };
    case SHOW_LOADING:
      return {
        ...state,
        showLoading: !state.showLoading,
        sendCodeButton: false,
      };
    default:
      return state;
  }
};
