import React, { useState } from "react";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option
} from "@material-tailwind/react";
import {
  PlusIcon
} from "@heroicons/react/24/outline";

export default function HomeScreen() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div className="relative h-80 w-full">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full"
              onClick={handleDialogOpen}>
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-90" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <div className="flex items-center">
              <span>Adicionar Anúncio</span>
            </div>
          </SpeedDialContent>
        </SpeedDial>

        <Dialog open={dialogOpen} handler={handleDialogOpen}>
          <DialogHeader>Faça seu anúncio:</DialogHeader>
          <DialogBody divider>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
              <div className="sm:col-span-3">
              <Select label="Tipo do material">
                  <Option> </Option>
                  <Option>Plástico</Option>
                  <Option>Isopor</Option>
                  <Option>Vidro</Option>
                  <Option>Papel</Option>
                  <Option>Papelão</Option>
                  <Option>Metal</Option>
                </Select>
              </div>
              <div className="sm:col-span-5">
                <Input size="md" label="Condição de aceitação" className="h-auto" />
              </div>
              <div className="sm:col-span-3">
                <Input size="md" label="Recompensa" />
              </div>
              <div className="sm:col-span-5">
                <Input size="md" label="Descrição" className="h-auto" />
              </div>
              <div className="sm:col-span-3">
                <Input size="md" label="Quantidade desejada" />
              </div>
            </div>

          </DialogBody>
          <DialogFooter>

            <Button
              variant="text"
              color="red"
              onClick={handleDialogClose}
              className="mr-1"
            >
              <span>Cancelar</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={handleDialogClose}>
              <span>Confirmar</span>
            </Button>
          </DialogFooter>
        </Dialog>

      </div>
    </div>
  );
}