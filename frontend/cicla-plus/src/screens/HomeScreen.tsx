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
import { NewAdvertisementAction } from "../actions/advertisements";
import { useDispatch } from "../store/configureStore";
import { materialTypeToString } from "../utils/material";

export default function HomeScreen() {
  const MATERIAL_LIST = ["is", "pl", "vd", "pp", "po", "mt"];
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tipoMaterial, setTipoMaterial] = useState("");
  const [condicaoAceitacao, setCondicaoAceitacao] = useState("");
  const [recompensa, setRecompensa] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidadeDesejada, setQuantidadeDesejada] = useState("");

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleConfirm = async () => {
    const times_viewed = "3";
    const company = "1"
    const hidden = false;
    const result = await dispatch(
      NewAdvertisementAction(
        descricao,
        tipoMaterial,
        quantidadeDesejada,
        condicaoAceitacao,
        recompensa,
        times_viewed,
        hidden, 
        company
      )
    );
    if (!result.ok) {
      alert("Ocorreu um erro, por favor tente novamente");
      return;
    }

    alert("Operação bem sucedida!");
  }

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
              <Select label="Tipo do material"
              value={tipoMaterial}
              onChange={(value) => setTipoMaterial(value!)}>
                  {MATERIAL_LIST.map((m) => (
              <Option value={m}>{materialTypeToString(m)}</Option>
            ))}
                </Select>
              </div>
              <div className="sm:col-span-5">
                <Input size="md" label="Condição de aceitação"  value={condicaoAceitacao}
                  onChange={(e) => setCondicaoAceitacao(e.target.value)} className="h-auto" />
              </div>
              <div className="sm:col-span-3">
                <Input size="md" label="Recompensa"  value={recompensa}
                  onChange={(e) => setRecompensa(e.target.value)}/>
              </div>
              <div className="sm:col-span-5">
                <Input size="md" label="Descrição"  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)} className="h-auto" />
              </div>
              <div className="sm:col-span-3">
                <Input size="md" label="Quantidade desejada"  value={quantidadeDesejada}
                  onChange={(e) => setQuantidadeDesejada(e.target.value)}/>
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
              onClick={handleConfirm}>
              <span>Confirmar</span>
            </Button>
          </DialogFooter>
        </Dialog>

      </div>
    </div>
  );
}
