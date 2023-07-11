import { ThunkAction } from "./types";

export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  token_type: "Bearer";
};

export function loginAction(
  loginData: LoginRequest
): ThunkAction<Promise<void>> {
  return async (dispatch) => {
    dispatch({
      type: "LOGIN",
      data: { accessToken: "foo", authenticated: true },
    });
  };
}

export function logoutAction(): ThunkAction<Promise<void>> {
  return async (dispatch) => {
    dispatch({
      type: "LOGOUT",
    });
  };
}
