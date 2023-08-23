import { getPersons } from "../api/getPersons";
import Result from "../types/Result";
import { ThunkAction } from "./types";
import { postRegisterPerson } from "../api/postRegisterPerson";

export function getPersonsAction(): ThunkAction<Promise<void>> {
  return async (dispatch) => {
    dispatch({ type: "GET_PERSONS_LOADING" });

    const result = await getPersons();

    if (!result.ok) {
      return dispatch({ type: "GET_PERSONS_ERROR" });
    }

    dispatch({ type: "GET_PERSONS_OK", data: result.value });
  };
}

export function RegisterPersonAction(
  username: any,
  email: any, 
  first_name: any,
  last_name: any,
  password: any,
  password2: any,
  location: any,
  phone: any,
  cpf: any,
  birthdate: any,
): ThunkAction<Promise<Result.Result<{}, {}>>> {
  return async (dispatch) => {
    try {
      const result = await postRegisterPerson({
        username,
        email,
        first_name,
        last_name,
        password,
        password2,
        location,
        phone,
        cpf,
        birthdate
      });

      if (!result.ok) {
        return Result.err({});
      }

      dispatch({ type: "REGISTER_PERSON" });
      await dispatch(getPersons);
      return Result.ok({});
    } catch {
      return Result.err({});
    }
  };
}

