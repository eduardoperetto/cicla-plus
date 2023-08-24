import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  AdvertisementState,
  isAdvertisementsLoading,
} from "../reducers/advertisements";
import {
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  List,
  ListItem,
  ListItemSuffix,
  Select,
  SpeedDial,
  SpeedDialContent,
  SpeedDialHandler,
  Spinner,
  Typography,
  Option,
  Input,
  DialogFooter,
} from "@material-tailwind/react";
import { TrashIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import { store, useDispatch } from "../store/configureStore";
import { Advertisement } from "../types/Advertisement";
import { materialTypeToString } from "../utils/material";
import {
  NewAdvertisementAction,
  deleteAdvertisementAction,
  toggleVisibilityAction,
} from "../actions/advertisements";
import { AdvertisementDialog } from "./Advertisement/AdvertisementDialog";
import { CompanyState, isCompaniesLoading } from "../reducers/companies";

export default function MyAdvertisementScreen() {
  const username = store.getState().login.user;
  const advertisementsState = useSelector(AdvertisementState);
  const companiesState = useSelector(CompanyState);

  const MATERIAL_LIST = ["is", "pl", "vd", "pp", "po", "mt"];
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tipoMaterial, setTipoMaterial] = useState("");
  const [condicaoAceitacao, setCondicaoAceitacao] = useState("");
  const [recompensa, setRecompensa] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidadeDesejada, setQuantidadeDesejada] = useState("");

  if (
    isAdvertisementsLoading(advertisementsState) ||
    isCompaniesLoading(companiesState)
  )
    return <Spinner className="h-12 w-12" />;

  if (
    advertisementsState.tag === "ERROR" ||
    companiesState.tag === "ERROR" ||
    username === null
  )
    return (
      <Typography color="gray" className="font-normal opacity-75">
        Ocorreu um erro, por favor tente novamente
      </Typography>
    );

  const advertisements = advertisementsState.advertisements.filter(
    (a) =>
      a.company.user.username === username && !a.is_deleted && !a.is_finished
  );

  const company = companiesState.companies.find(
    (c) => c.user.username === username
  );

  if (!company) {
    return (
      <Typography color="gray" className="font-normal opacity-75">
        Ocorreu um erro, por favor tente novamente
      </Typography>
    );
  }

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleConfirm = async () => {
    const times_viewed = "3";
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
        company.id
      )
    );
    if (!result.ok) {
      alert("Ocorreu um erro, por favor tente novamente");
      return;
    }

    alert("Operação bem sucedida!");
    window.location.reload();
  };

  return (
    <>
      <br />
      <Typography color="blue-gray" className="font-bold text-xl">
        Meus Anúncios
      </Typography>
      <Card className="w-full">
        <List>
          {advertisements.map((a) => (
            <AdvertisementListItem advertisement={a} />
          ))}
        </List>
      </Card>

      <div className="relative h-80 w-full">
        <div className="absolute bottom-0 right-0">
          <SpeedDial>
            <SpeedDialHandler>
              <IconButton
                size="lg"
                className="rounded-full"
                onClick={handleDialogOpen}
              >
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
                  <Select
                    label="Tipo do material"
                    value={tipoMaterial}
                    onChange={(value) => setTipoMaterial(value!)}
                  >
                    {MATERIAL_LIST.map((m) => (
                      <Option value={m}>{materialTypeToString(m)}</Option>
                    ))}
                  </Select>
                </div>
                <div className="sm:col-span-5">
                  <Input
                    size="md"
                    label="Condição de aceitação"
                    value={condicaoAceitacao}
                    onChange={(e) => setCondicaoAceitacao(e.target.value)}
                    className="h-auto"
                  />
                </div>
                <div className="sm:col-span-3">
                  <Input
                    size="md"
                    label="Recompensa"
                    value={recompensa}
                    onChange={(e) => setRecompensa(e.target.value)}
                  />
                </div>
                <div className="sm:col-span-5">
                  <Input
                    size="md"
                    label="Descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    className="h-auto"
                  />
                </div>
                <div className="sm:col-span-3">
                  <Input
                    size="md"
                    label="Quantidade desejada (em Kg)"
                    value={quantidadeDesejada}
                    onChange={(e) => setQuantidadeDesejada(e.target.value)}
                  />
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
              <Button variant="gradient" color="green" onClick={handleConfirm}>
                <span>Confirmar</span>
              </Button>
            </DialogFooter>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export function AdvertisementListItem({
  advertisement,
}: {
  advertisement: Advertisement;
}) {
  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => setOpenDialog(!openDialog);

  return (
    <>
      <ListItem ripple={false} className="py-1 pr-1 pl-4">
        {materialTypeToString(advertisement.material_type) +
          " - " +
          advertisement.material_description}
        <ListItemSuffix className="flex">
          <Button
            variant="filled"
            color="blue-gray"
            className="flex mr-4"
            onClick={handleOpenDialog}
          >
            Ver detalhes
          </Button>
          <Button
            variant="filled"
            color="blue-gray"
            className="flex mr-4"
            onClick={async () => {
              const result = await dispatch(
                toggleVisibilityAction(advertisement.id, !advertisement.hidden)
              );

              if (!result.ok) {
                alert("Ocorreu um erro, por favor tente novamente");
                return;
              }

              alert("Operação bem sucedida!");
            }}
          >
            {React.createElement(
              advertisement.hidden ? EyeIcon : EyeSlashIcon,
              { className: "h-[18px] w-[18px] mr-2" }
            )}{" "}
            {advertisement.hidden ? "Mostrar" : "Esconder"}
          </Button>
          <Button
            variant="filled"
            color="red"
            className="flex"
            onClick={async () => {
              const result = await dispatch(
                deleteAdvertisementAction(advertisement.id)
              );
              if (!result.ok) {
                alert("Ocorreu um erro, por favor tente novamente");
                return;
              }

              alert("Operação bem sucedida!");
            }}
          >
            {React.createElement(TrashIcon, {
              className: "h-[18px] w-[18px] mr-2",
            })}{" "}
            {"Excluir"}
          </Button>
        </ListItemSuffix>
      </ListItem>

      <AdvertisementDialog
        isInteractive={false}
        openDialog={openDialog}
        handleOpenDialog={handleOpenDialog}
        advertisement={advertisement}
      />
    </>
  );
}
