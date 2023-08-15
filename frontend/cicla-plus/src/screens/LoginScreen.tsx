import React from "react";
import { Button, Input } from "@material-tailwind/react";
import { useDispatch } from "../store/configureStore";
import { loginAction } from "../actions/login";

export default function LoginScreen() {
  const dispatch = useDispatch();

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex flex-col items-center gap-4">
      <Input size="md" label="E-mail" />
      <Input size="md" label="Senha" />
        <Button
          onClick={async () =>
            await dispatch(loginAction({ username: "foo", password: "bar" }))
          }
        >
          Entrar
        </Button>
        <Button
        onClick={async () =>
          await dispatch(loginAction({ username: "foo", password: "bar" }))
        }
        >
          Registrar-se
        </Button>
      </div>
    </div>
  );
}
