export type LoginParams = {
  email: string
  password: string
}

export type LoginResponse = {
  verificationId: string
}

export type SendOtpParams = {
  code: string
  verificationId: string
}

export type SendOtpResponse = {
  token: string
}