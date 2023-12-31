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
import { useDispatch } from "../../store/configureStore";
import { postNewTransactionAction } from "../../actions/transactions";

export function AdvertisementDialog({
  advertisement,
  openDialog,
  handleOpenDialog,
  isInteractive = true,
}: {
  advertisement: Advertisement;
  openDialog: boolean;
  handleOpenDialog: () => void;
  isInteractive?: boolean;
}) {
  const dispatch = useDispatch();

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
        {isInteractive && (
          <Button
            variant="gradient"
            color="green"
            onClick={async () => {
              handleOpenDialog();

              const result = await dispatch(
                postNewTransactionAction(advertisement.id)
              );

              if (!result.ok) {
                alert(
                  "Ocorreu um erro ao realizar a solicitação, por favor tente novamente."
                );
                return;
              }

              alert(
                "Pedido realizado com sucesso! Você pode acessar a aba 'Transações' para ver os detalhes."
              );
              window.location.reload();
            }}
          >
            <span>Doar</span>
          </Button>
        )}
      </DialogFooter>
    </Dialog>
  );
}
