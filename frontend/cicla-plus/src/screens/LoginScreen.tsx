import React from "react";
import { Button, Input, Dialog, DialogHeader, DialogBody, DialogFooter, Radio } from "@material-tailwind/react";
import { useDispatch } from "../store/configureStore";
import { loginAction } from "../actions/login";
import { Link } from "react-router-dom";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

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
        <Button onClick={handleOpen} size="sm">
          Registrar-se
        </Button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Escolha seu tipo de cadastro: </DialogHeader>
          <DialogBody divider>
            <div className="flex flex-col items-center" >
              <Radio name="type" label="Pessoa Física" />
              <Radio name="type" label="Pessoa Jurídica" defaultChecked />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
              size="sm"
            >
              <span>Cancelar</span>
            </Button>
            <Link to="/register"> {/* Use Link para redirecionar */}
              <Button variant="gradient" color="green" size="sm" onClick={handleOpen}>
                <span>Confirmar</span>
              </Button>
            </Link>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
}