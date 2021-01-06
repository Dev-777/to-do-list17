import { SURNAME_ONCHANGE, NAME_ONCHANGE, PASSWORD_ONCHANGE, EMAIL_ONCHANGE, REPEAT_PASSWORD_ONCHANGE, NAME_VALIDATION, SURNAME_VALIDATION, EMAIL_VALIDATION, PASSWORD_VALIDATION, REPEAT_PASSWORD_VALIDATION, RESET_SIGN_UP_FORM } from './actions'
const initialState: any = {
    fieldsValue: {
        name: '',
        surname: '',
        email: '',
        password: '',
        repeatPassword: '',
    },
    validation: {
        name: false,
        surname: false,
        email: false,
        password: false,
        repeatPasword: false
    },
}

export const signUpReducer: any = (state: any = initialState, actions: any) => {
    switch (actions.type) {
        case NAME_ONCHANGE:
            return { ...state, fieldsValue: { ...state.fieldsValue, name: actions.payload } }
        case SURNAME_ONCHANGE:
            return { ...state, fieldsValue: { ...state.fieldsValue, surname: actions.payload } }
        case EMAIL_ONCHANGE:
            return { ...state, fieldsValue: { ...state.fieldsValue, email: actions.payload } }
        case PASSWORD_ONCHANGE:
            return { ...state, fieldsValue: { ...state.fieldsValue, password: actions.payload } }
        case REPEAT_PASSWORD_ONCHANGE:
            return { ...state, fieldsValue: { ...state.fieldsValue, repeatPassword: actions.payload } }
        case NAME_VALIDATION:
            return { ...state, validation: { ...state.validation, name: !state.validation.name } }
        case SURNAME_VALIDATION:
            return { ...state, validation: { ...state.validation, surname: !state.validation.surname } }
        case EMAIL_VALIDATION:
            return { ...state, validation: { ...state.validation, email: !state.validation.email } }
        case PASSWORD_VALIDATION:
            return { ...state, validation: { ...state.validation, password: !state.validation.password } }
        case REPEAT_PASSWORD_VALIDATION:
            return { ...state, validation: { ...state.validation, repeatPassword: !state.validation.repeatPassword } }
        case RESET_SIGN_UP_FORM:
            return { ...state, fieldsValue: initialState.fieldsValue }

        default:
            return state;
    }
}

