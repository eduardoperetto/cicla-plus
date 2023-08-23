export type LoginState = {
  authenticated: boolean;
  accessToken: string | null;
  user: string | null;
  is_admin: boolean;
};

export type LoginAction =
  | { type: "LOGIN"; data: LoginState }
  | { type: "LOGOUT" };

const initialState: LoginState = {
  authenticated: false,
  accessToken: null,
  user: null,
  is_admin: false,
};

export default function login(
  state: LoginState = initialState,
  action: LoginAction
) {
  switch (action.type) {
    case "LOGIN":
      var { accessToken, user, is_admin } = action.data;
      return {
        authenticated: true,
        accessToken: accessToken,
        user: user,
        is_admin: is_admin,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}
