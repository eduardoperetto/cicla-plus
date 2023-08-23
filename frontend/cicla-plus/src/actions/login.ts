import { postLogin } from "../api/postLogin";
import Result from "../types/Result";
import { ThunkAction } from "./types";

export type LoginRequest = {
  username: string;
  password: string;
};

export function loginAction(
  loginData: LoginRequest
): ThunkAction<Promise<Result.Result<{}, {}>>> {
  return async (dispatch) => {
    try {
      const result = await postLogin(loginData);

      if (!result.ok) {
        return Result.err({});
      }

      const loginResult = result.value;

      dispatch({
        type: "LOGIN",
        data: {
          accessToken: loginResult.access,
          authenticated: true,
          user: loginResult.user,
          is_admin: loginResult.is_admin,
          is_company: loginResult.is_company,
        },
      });

      return Result.ok({});
    } catch {
      return Result.err({});
    }
  };
}

export function logoutAction(): ThunkAction<Promise<void>> {
  return async (dispatch) => {
    dispatch({
      type: "LOGOUT",
    });
  };
}
