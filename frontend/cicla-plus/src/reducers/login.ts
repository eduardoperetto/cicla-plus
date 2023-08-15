export type LoginState = {
  authenticated: boolean;
  accessToken: string | null;
};

export type LoginAction =
  | { type: "LOGIN"; data: LoginState }
  | { type: "LOGOUT" };

const initialState: LoginState = {
  authenticated: false,
  accessToken: null,
};

export default function login(
  state: LoginState = { authenticated: false, accessToken: null },
  action: LoginAction
) {
  switch (action.type) {
    case "LOGIN":
      var { accessToken } = action.data;
      return {
        authenticated: true,
        accessToken: accessToken,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}
