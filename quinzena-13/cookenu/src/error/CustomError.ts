export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidInfos extends CustomError {
  constructor() {
    super(400, "Um ou mais dados inválidos!");
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Email inválido!");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "A senha deve conter 6 ou mais caracteres!");
  }
}

export class IncorrectPassword extends CustomError {
  constructor() {
    super(400, "A senha está incorreta!");
  }
}

export class InvalidToken extends CustomError {
  constructor() {
    super(400, "O token é inválido!");
  }
}

export class InvalidAuthenticatorData extends CustomError {
  constructor() {
    super(400, "O Autenticador é inválido!");
  }
}

