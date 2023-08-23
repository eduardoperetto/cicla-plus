import React from "react";
import { useSelector } from "react-redux";
import {
  TransactionState,
  isTransactionsLoading,
} from "../reducers/transactions";
import { Spinner, Typography } from "@material-tailwind/react";
import { store } from "../store/configureStore";

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

  return <div>ISSO SÓ DEVE SER VISTO POR FORNECEDORES </div>;
};

export default TransactionScreen;
