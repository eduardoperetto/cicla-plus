import React from "react";
import { Button, Input } from "@material-tailwind/react";
import { useDispatch } from "../store/configureStore";
import { loginAction } from "../actions/login";
import { Link } from "react-router-dom";

export default function LoginScreen() {
  const dispatch = useDispatch();

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex flex-col items-center gap-4">
      <Input size="md" label="E-mail" />
      <Input size="md" label="Senha" />
        <Button size="sm"
          onClick={async () =>
            await dispatch(loginAction({ username: "foo", password: "bar" }))
          }
        >
          Entrar
          </Button>
          <Link to="/register"> {/* Use Link para redirecionar */}
            <Button size="sm">
              Registrar-se
            </Button>
          </Link>
      </div>
    </div>
  );
}
