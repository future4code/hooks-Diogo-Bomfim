// export type User = { id: string, email: string, password: string }

export class User {
    constructor(
        public id: string,
        public email: string,
        public password: string
    ){
        this.id = id
        this.email = email
        this.password = password
    }
}