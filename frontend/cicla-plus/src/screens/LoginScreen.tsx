import React, { useState } from "react";
import {
  Button,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch } from "../store/configureStore";
import { LoginRequest, loginAction } from "../actions/login";
import { Link } from "react-router-dom";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [fornecedorSelected, setFornecedorSelected] = useState(false);
  const [anuncianteSelected, setAnuncianteSelected] = useState(false);

  const [loginRequest, setLoginRequest] = useState<LoginRequest>({
    username: "",
    password: "",
  });

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleFornecedorSelect = () => {
    setFornecedorSelected(true);
    setAnuncianteSelected(false);
  };

  const handleAnuncianteSelect = () => {
    setAnuncianteSelected(true);
    setFornecedorSelected(false);
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <Input
          size="md"
          label="E-mail"
          value={loginRequest.username}
          onChange={(e) =>
            setLoginRequest({ ...loginRequest, username: e.target.value })
          }
        />
        <Input
          size="md"
          label="Senha"
          type="password"
          value={loginRequest.password}
          onChange={(e) =>
            setLoginRequest({ ...loginRequest, password: e.target.value })
          }
        />
        <Button
          size="sm"
          disabled={
            loginRequest.username === "" && loginRequest.password === ""
          }
          onClick={async () => {
            const result = await dispatch(loginAction(loginRequest));

            if (!result.ok) {
              alert(
                "Ocorreu um erro ao tentar fazer o login, confira o seu usuário e senha."
              );
            }
          }}
        >
          Entrar
        </Button>
        <Button onClick={handleDialogOpen} size="sm">
          Registrar-se
        </Button>
        <Dialog open={dialogOpen} handler={handleDialogClose}>
          <DialogHeader>Escolha seu tipo de cadastro: </DialogHeader>
          <DialogBody divider>
            <div className="flex flex-col items-center gap-3">
              <Button
                onClick={handleAnuncianteSelect}
                color={anuncianteSelected ? "blue" : "gray"} // Altera a cor do botão com base no estado
              >
                Quero ser um ANUNCIANTE!
              </Button>
              <Button
                onClick={handleFornecedorSelect}
                color={fornecedorSelected ? "blue" : "gray"} // Altera a cor do botão com base no estado
              >
                Quero ser um FORNECEDOR!
              </Button>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleDialogClose}
              className="mr-1"
              size="sm"
            >
              <span>Cancelar</span>
            </Button>
            <Link
              to={
                anuncianteSelected ? "/register-enterprise" : "/register-person"
              }
            >
              <Button
                variant="gradient"
                color="green"
                size="sm"
                onClick={handleDialogClose}
              >
                <span>Confirmar</span>
              </Button>
            </Link>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
}
