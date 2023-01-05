export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
});
