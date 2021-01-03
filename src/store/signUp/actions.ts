export const NAME_ONCHANGE: string = "NAME_ONCHANGE";
export const SURNAME_ONCHANGE: string = "SURNAME_ONCHANGE";
export const PASSWORD_ONCHANGE: string = "PASSWORD_ONCHANGE";
export const EMAIL_ONCHANGE: string = "EMAIL_ONCHANGE";



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