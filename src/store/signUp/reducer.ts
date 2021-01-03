import {SURNAME_ONCHANGE, NAME_ONCHANGE, PASSWORD_ONCHANGE, EMAIL_ONCHANGE} from './actions'
const initialState: any = {
    name:'',
    surname:'',
    email:'',
    password:'',
}

export const signUpReducer: any = (state: any=initialState, actions: any)=>{

    switch(actions.type){
        case NAME_ONCHANGE:
            return {...state, name: actions.payload}
    case SURNAME_ONCHANGE:
            return {...state, surname: actions.payload}
    case EMAIL_ONCHANGE:
            return {...state, email: actions.payload}
 case PASSWORD_ONCHANGE:
            return {...state, password: actions.payload}

        default:
            return state;
    }
}

