export type LoginState = {
  authenticated: boolean;
  accessToken: string | null;
  user: string | null;
  is_admin: boolean;
  is_company: boolean;
};

export type LoginAction =
  | { type: "LOGIN"; data: LoginState }
  | { type: "LOGOUT" };

const initialState: LoginState = {
  authenticated: false,
  accessToken: null,
  user: null,
  is_admin: false,
  is_company: false,
};

export default function login(
  state: LoginState = initialState,
  action: LoginAction
) {
  switch (action.type) {
    case "LOGIN":
      var { accessToken, user, is_admin, is_company } = action.data;
      return {
        authenticated: true,
        accessToken: accessToken,
        user: user,
        is_admin: is_admin,
        is_company: is_company,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}
