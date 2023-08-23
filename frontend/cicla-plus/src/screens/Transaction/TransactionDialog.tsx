import React from "react";
import {
  Button,
  Chip,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { Transaction } from "../../types/Transaction";
import { statusToColor, statusToString } from "../../utils/status";

export function TransactionDialog({
  transaction,
  openDialog,
  handleOpenDialog,
}: {
  transaction: Transaction;
  openDialog: boolean;
  handleOpenDialog: () => void;
}) {
  return (
    <Dialog open={openDialog} handler={handleOpenDialog}>
      <DialogHeader>
        <Chip
          value={statusToString(transaction.status)}
          variant="filled"
          color={statusToColor(transaction.status)}
          size="sm"
          className="rounded-full mr-2"
        />{" "}
        Doação de {transaction.advertisement.material_description}
      </DialogHeader>
      <DialogBody divider>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Anunciante:{" "}
          <span className="font-normal">
            {" "}
            {transaction.advertisement.company.user.first_name}
          </span>
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Quantidade:{" "}
          <span className="font-normal">
            {" "}
            {transaction.advertisement.quantity}kg
          </span>
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Condições:{" "}
          <span className="font-normal">
            {" "}
            {transaction.advertisement.acceptance_condition}
          </span>
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Recompensa:{" "}
          <span className="font-normal">
            {" "}
            {transaction.advertisement.profit_type}
          </span>
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Data de Criação:{" "}
          <span className="font-normal">
            {" "}
            {new Date(transaction.created_at).toLocaleDateString()}
          </span>
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Última Atualização:{" "}
          <span className="font-normal">
            {" "}
            {new Date(transaction.last_update).toLocaleDateString()}
          </span>
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
      </DialogFooter>
    </Dialog>
  );
}
