import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { MaterialImage } from "./MaterialImage";
import { Advertisement } from "../../types/Advertisement";
import { AdvertisementDialog } from "./AdvertisementDialog";

export function AdvertisementCard({
  advertisement,
}: {
  advertisement: Advertisement;
}) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => setOpenDialog(!openDialog);

  return (
    <>
      <Card className="w-96 bg-green-50">
        <CardHeader shadow={false} floated={false} className="h-96">
          <MaterialImage material={advertisement.material_type} />
        </CardHeader>
        <CardBody>
          <Typography color="blue-gray" className="font-bold">
            Anunciante: {advertisement.company.user.first_name}
          </Typography>
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" className="font-medium">
              {advertisement.material_description}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              {advertisement.quantity}kg
            </Typography>
          </div>
          <Typography variant="small" color="gray" className="font-normal">
            Recompensa: {advertisement.profit_type}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={handleOpenDialog}
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
          >
            Ver detalhes
          </Button>
        </CardFooter>
      </Card>

      <AdvertisementDialog
        openDialog={openDialog}
        handleOpenDialog={handleOpenDialog}
        advertisement={advertisement}
      />
    </>
  );
}
