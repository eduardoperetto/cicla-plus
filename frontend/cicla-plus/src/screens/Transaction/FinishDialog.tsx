import React, { useState } from "react";
import {
  Button,
  Chip,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { Transaction } from "../../types/Transaction";
import { statusToColor, statusToString } from "../../utils/status";
import { useDispatch } from "../../store/configureStore";
import { postFinishTransactionAction } from "../../actions/transactions";

export function FinishDialog({
  transaction,
  openDialog,
  handleOpenDialog,
}: {
  transaction: Transaction;
  openDialog: boolean;
  handleOpenDialog: () => void;
}) {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

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
        <Typography color="blue-gray" className="mb-2">
          Insira abaixo o token do seu fornecedor.
        </Typography>
        <Input
          size="md"
          label="Senha"
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="green"
          onClick={async () => {
            const result = await dispatch(
              postFinishTransactionAction(transaction, token)
            );

            if (!result.ok) {
              alert(
                "Ocorreu um erro ao tentar finalizar a transação, por favor confira o token inserido e tente novamente."
              );
              return;
            }

            alert("Transação finalizada com sucesso.");
            window.location.reload();
          }}
          className="mr-1"
        >
          <span>Confirmar</span>
        </Button>
        <Button
          variant="text"
          color="red"
          onClick={handleOpenDialog}
          className="mr-1"
        >
          <span>Cancelar</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
