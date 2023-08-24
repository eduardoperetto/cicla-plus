import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  AdvertisementState,
  isAdvertisementsLoading,
} from "../reducers/advertisements";
import {
  Button,
  Card,
  List,
  ListItem,
  ListItemSuffix,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { TrashIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "../store/configureStore";
import { Advertisement } from "../types/Advertisement";
import { materialTypeToString } from "../utils/material";
import {
  adminDeleteAdvertisementAction,
  toggleVisibilityAction,
} from "../actions/advertisements";
import { AdvertisementDialog } from "./Advertisement/AdvertisementDialog";

export default function AdminAdvertisementScreen() {
  const advertisementsState = useSelector(AdvertisementState);

  if (isAdvertisementsLoading(advertisementsState))
    return <Spinner className="h-12 w-12" />;

  if (advertisementsState.tag === "ERROR")
    return (
      <Typography color="gray" className="font-normal opacity-75">
        Ocorreu um erro, por favor tente novamente
      </Typography>
    );

  const advertisements = advertisementsState.advertisements.filter(
    (a) => !a.is_deleted && !a.is_finished
  );

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
            color="red"
            className="flex"
            onClick={async () => {
              const result = await dispatch(
                adminDeleteAdvertisementAction(advertisement.id)
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
