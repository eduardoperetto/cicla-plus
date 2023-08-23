import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  TransactionState,
  isTransactionsLoading,
} from "../reducers/transactions";
import {
  Button,
  Card,
  Chip,
  List,
  ListItem,
  ListItemSuffix,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { store, useDispatch } from "../store/configureStore";
import { Transaction } from "../types/Transaction";
import { materialTypeToString } from "../utils/material";
import { statusToColor, statusToString } from "../utils/status";
import { TransactionDialog } from "./Transaction/TransactionDialog";
import { postUpdateTransactionAction } from "../actions/transactions";

const TransactionScreen = () => {
  const username = store.getState().login.user;
  const transactionsState = useSelector(TransactionState);

  if (isTransactionsLoading(transactionsState))
    return <Spinner className="h-12 w-12" />;

  if (transactionsState.tag === "ERROR")
    return (
      <Typography color="gray" className="font-normal opacity-75">
        Ocorreu um erro, por favor tente novamente
      </Typography>
    );

  const transactions = transactionsState.transactions.filter(
    (t) => t.user.user.username === username
  );

  return (
    <>
      <br />
      <Typography color="blue-gray" className="font-bold text-xl">
        Minhas Transações
      </Typography>
      <Card className="w-full">
        <List>
          {transactions.map((a) => (
            <TransactionListItem transaction={a} />
          ))}
        </List>
      </Card>
    </>
  );
};

export default TransactionScreen;

export function TransactionListItem({
  transaction,
}: {
  transaction: Transaction;
}) {
  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => setOpenDialog(!openDialog);

  return (
    <>
      <ListItem ripple={false} className="py-1 pr-1 pl-4">
        <Chip
          value={statusToString(transaction.status)}
          variant="filled"
          color={statusToColor(transaction.status)}
          size="sm"
          className="rounded-full mr-2"
        />
        {materialTypeToString(transaction.advertisement.material_type) +
          " - " +
          transaction.advertisement.material_description}
        <ListItemSuffix className="flex">
          <Button
            variant="filled"
            color="blue-gray"
            className="flex mr-4"
            onClick={handleOpenDialog}
          >
            Ver detalhes
          </Button>
          {transaction.status === "og" && (
            <Button
              variant="filled"
              color="red"
              className="flex"
              onClick={async () => {
                const result = await dispatch(
                  postUpdateTransactionAction(transaction, "cs")
                );

                if (!result.ok) {
                  alert(
                    "Ocorreu um erro ao processar sua solicitação, por favor tente novamente."
                  );
                  return;
                }

                alert("Pedido cancelado com sucesso!");
                window.location.reload();
              }}
            >
              Cancelar
            </Button>
          )}
        </ListItemSuffix>
      </ListItem>

      <TransactionDialog
        handleOpenDialog={handleOpenDialog}
        openDialog={openDialog}
        transaction={transaction}
      />
    </>
  );
}
