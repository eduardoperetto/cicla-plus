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
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { useDispatch } from "../store/configureStore";
import { loginAction } from "../actions/login";
import { Link } from "react-router-dom";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [fornecedorSelected, setFornecedorSelected] = useState(false);

  const handleDialogOpen = () => {
    setFornecedorSelected(false);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleFornecedorSelect = () => {
    setFornecedorSelected(true);
  };

  const handleAnuncianteSelect = () => {
    setFornecedorSelected(false); // Fechar o toggle ao selecionar "Quero ser um ANUNCIANTE!"
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
        <Button onClick={handleDialogOpen} size="sm">
          Registrar-se
        </Button>
        <Dialog open={dialogOpen} handler={handleDialogClose}>
          <DialogHeader>Escolha seu tipo de cadastro: </DialogHeader>
          <DialogBody divider>
            <div className="flex flex-col items-center gap-3">
            <Button onClick={handleAnuncianteSelect}>
                Quero ser um ANUNCIANTE!
              </Button>
              <Button onClick={handleFornecedorSelect}>
                Quero ser um FORNECEDOR!
              </Button>
              {fornecedorSelected && (
                <Collapse open={fornecedorSelected}>
                  <Card className="my-2 mx-auto w-4/6 max-h-25 overflow-y-auto">
                    <CardBody>
                      <Typography>
                        <Radio name="type" label="Pessoa Física" />
                        <Radio name="type" label="Pessoa Jurídica" defaultChecked />
                      </Typography>
                    </CardBody>
                  </Card>
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
            <Link to="/register">
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