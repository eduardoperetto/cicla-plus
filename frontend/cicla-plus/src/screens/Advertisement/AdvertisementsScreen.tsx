import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { MaterialImage } from "./MaterialImage";

type Advertisement = {
  id: number;
  materialDescription: string;
  materialType: "pl" | "is" | "vd" | "pp" | "po" | "mt";
  quantity: number;
  acceptanceCondition: string;
  profitType: string;
  timesViewed: number;
  company: Company;
};

type Company = {
  id: number;
  user: number;
  location: string;
  phoneNumber: string;
  cnpj: string;
};

const foobar: Advertisement = {
  id: 1,
  materialDescription: "Garrafa Pet",
  materialType: "pl",
  quantity: 10,
  acceptanceCondition: "Limpas",
  profitType: "Cupom de 10% de desconto",
  timesViewed: 50,
  company: {
    id: 1,
    user: 1,
    location: "Porto Alegre/RS",
    phoneNumber: "519912345678",
    cnpj: "49190159000105",
  },
};

const advertisementsFoo = [foobar, foobar, foobar, foobar, foobar, foobar];

function AdvertisementCard({
  advertisement,
}: {
  advertisement: Advertisement;
}) {
  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <MaterialImage material={advertisement.materialType} />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-medium">
            {advertisement.materialDescription}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {advertisement.quantity}kg
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          Recompensa: {advertisement.profitType}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
        >
          Ver mais
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function AdvertisementsScreen() {
  return (
    <div className="flex flex-wrap flex flex-wrap w-full justify-around gap-3">
      {advertisementsFoo.map((ad) => (
        <AdvertisementCard advertisement={ad} />
      ))}
    </div>
  );
}
