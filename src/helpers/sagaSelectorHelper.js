// TODO: Move this file to selectors
export const getUser = state => state.authentication.login.user;

export const getResetPasswordOobCode = state => state.authentication.resetPassword.oobCode;
