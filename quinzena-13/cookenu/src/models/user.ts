export type AuthenticationData = {
    id : string;
}

export type user = {
    id : string,
    name : string,
    email : string,
    password : string
}

export interface userDTO  {
    name : string,
    email : string,
    password : string
}

export interface loginDTO {
    email : string,
    password : string
}
