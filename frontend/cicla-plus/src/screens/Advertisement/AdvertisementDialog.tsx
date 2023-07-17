import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { Advertisement } from "../../types/Advertisement";

export function AdvertisementDialog({
  advertisement,
  openDialog,
  handleOpenDialog,
}: {
  advertisement: Advertisement;
  openDialog: boolean;
  handleOpenDialog: () => void;
}) {
  return (
    <Dialog open={openDialog} handler={handleOpenDialog}>
      <DialogHeader>
        Doação de {advertisement.material_description}
      </DialogHeader>
      <DialogBody divider>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Anunciante:{" "}
          <span className="font-normal">
            {" "}
            {advertisement.company.user.first_name}
          </span>
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Quantidade:{" "}
          <span className="font-normal"> {advertisement.quantity}kg</span>
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Condições:{" "}
          <span className="font-normal">
            {" "}
            {advertisement.acceptance_condition}
          </span>
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Recompensa:{" "}
          <span className="font-normal"> {advertisement.profit_type}</span>
        </Typography>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpenDialog}
          className="mr-1"
        >
          <span>Fechar</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleOpenDialog}>
          <span>Doar</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
