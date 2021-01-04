export const NAME_ONCHANGE: string = "NAME_ONCHANGE";
export const SURNAME_ONCHANGE: string = "SURNAME_ONCHANGE";
export const PASSWORD_ONCHANGE: string = "PASSWORD_ONCHANGE";
export const EMAIL_ONCHANGE: string = "EMAIL_ONCHANGE";
export const REPEAT_PASSWORD_ONCHANGE: string = "REPEAT_PASSWORD_ONCHANGE";


export const nameOnchange:any=(value:string)=>{
    return {type: NAME_ONCHANGE, payload:value}
}
export const surnameOnchange:any=(value:string)=>{
    return {type: SURNAME_ONCHANGE, payload:value}
}
export const emailOnchange:any=(value:string)=>{
    return {type: EMAIL_ONCHANGE, payload:value}
}
export const passwordOnchange:any=(value:string)=>{
    return {type: PASSWORD_ONCHANGE, payload:value}
}
export const repeatPasswordOnchange:any=(value:string)=>{
    return {type: REPEAT_PASSWORD_ONCHANGE, payload:value}
}

//////////////

export const NAME_VALIDATION: string = "NAME_VALIDATION";
export const SURNAME_VALIDATION: string = "SURNAME_VALIDATION";
export const EMAIL_VALIDATION: string = "EMAIL_VALIDATION";
export const PASSWORD_VALIDATION: string = "PASSWORD_VALIDATION";
export const REPEAT_PASSWORD_VALIDATION: string = "REPEAT_PASSWORD_VALIDATION";


export const nameValidationAction:any=()=>{
    return {type: NAME_VALIDATION}
}
export const surnameValidationAction:any=()=>{
    return {type: SURNAME_VALIDATION}
}
export const emailValidationAction:any=()=>{
    return {type: EMAIL_VALIDATION}
}
export const passwordValidationAction:any=()=>{
    return {type: PASSWORD_VALIDATION}
}
export const repeatPasswordValidationAction:any=()=>{
    return {type: REPEAT_PASSWORD_VALIDATION}
}

