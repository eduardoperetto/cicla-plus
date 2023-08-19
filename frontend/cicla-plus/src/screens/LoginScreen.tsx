import React, { useState } from "react";
import {
  Button,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Radio,
  Collapse,
} from "@material-tailwind/react";
import { useDispatch } from "../store/configureStore";
import { loginAction } from "../actions/login";
import { Link } from "react-router-dom";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [fornecedorSelected, setFornecedorSelected] = useState(false);
  const [anuncianteSelected, setAnuncianteSelected] = useState(false);
  const [tipoCadastro, setTipoCadastro] = useState("");

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

  const handleTipoCadastroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTipoCadastro(event.target.value);
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <Input size="md" label="E-mail" />
        <Input size="md" label="Senha" />
        <Button
          size="sm"
          onClick={async () =>
            await dispatch(loginAction({ username: "foo", password: "bar" }))
          }
        >
          Entrar
        </Button>
        <Button
          onClick={handleDialogOpen}
          size="sm"
        >
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
              {fornecedorSelected && (
                <Collapse open={fornecedorSelected}>
                  <div className="flex flex-col items-center">
                  <Radio
                      name="type"
                      label="Pessoa Física"
                      value="pessoa_fisica"
                      checked={tipoCadastro === "pessoa_fisica"}
                      onChange={handleTipoCadastroChange}
                    />
                    <Radio
                      name="type"
                      label="Pessoa Jurídica"
                      value="pessoa_juridica"
                      checked={tipoCadastro === "pessoa_juridica"}
                      onChange={handleTipoCadastroChange}
                    />
                  </div>
                </Collapse>
              )}
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
            <Link to={anuncianteSelected ? "/registerenterprise" : tipoCadastro === "pessoa_juridica" ? "/registerenterprise" : "/registerperson"}>
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