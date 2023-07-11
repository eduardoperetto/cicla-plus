import React from "react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "../store/configureStore";
import { loginAction } from "../actions/login";

export default function LoginScreen() {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        onClick={async () =>
          await dispatch(loginAction({ username: "foo", password: "bar" }))
        }
      >
        Login
      </Button>
    </>
  );
}
