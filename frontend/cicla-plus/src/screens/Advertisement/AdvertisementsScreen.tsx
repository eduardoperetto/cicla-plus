import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Select,
  Option,
  Typography,
} from "@material-tailwind/react";
import { MaterialImage } from "./MaterialImage";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { materialTypeToString } from "../../utils/material";
import { getAdvertisements } from "../../api/getAdvertisements";

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
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => setOpenDialog(!openDialog);

  return (
    <>
      <Card className="w-96 bg-green-50">
        <CardHeader shadow={false} floated={false} className="h-96">
          <MaterialImage material={advertisement.materialType} />
        </CardHeader>
        <CardBody>
          <Typography color="blue-gray" className="font-bold">
            Anunciante: {advertisement.company.user}
          </Typography>
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" className="font-medium">
              {advertisement.materialDescription}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              {advertisement.quantity}kg
            </Typography>
          </div>
          <Typography variant="small" color="gray" className="font-normal">
            Recompensa: {advertisement.profitType}
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

function AdvertisementDialog({
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
      <DialogHeader>Doação de {advertisement.materialDescription}</DialogHeader>
      <DialogBody divider>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Anunciante:{" "}
          <span className="font-normal"> {advertisement.company.user}kg</span>
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Quantidade:{" "}
          <span className="font-normal"> {advertisement.quantity}kg</span>
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Condições:{" "}
          <span className="font-normal">
            {" "}
            {advertisement.acceptanceCondition}
          </span>
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Recompensa:{" "}
          <span className="font-normal"> {advertisement.profitType}</span>
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

const MATERIAL_LIST = ["is", "pl", "vd", "pp", "po", "mt"];
const companiesFoo = [
  { id: 1, name: "Coca-Cola" },
  { id: 2, name: "Brastemp" },
];

export default function AdvertisementsScreen() {
  const [keywords, setKeywords] = useState("");
  const [company, setCompany] = useState<undefined | number>(undefined);
  const [material, setMaterial] = useState<undefined | string>(undefined);

  const filteredAds = advertisementsFoo.filter(
    (ad) =>
      ad.materialDescription.toLowerCase().includes(keywords.toLowerCase()) &&
      (material !== undefined ? ad.materialType === material : true) &&
      (company !== undefined ? ad.company.id === company : true)
  );

  return (
    <>
      <br />
      <div className="flex items-center gap-3">
        {React.createElement(MagnifyingGlassIcon, {
          className: "h-[25px] w-[25px]",
        })}
        <Input
          color="green"
          label="Buscar"
          onChange={(e) => setKeywords(e.target.value)}
          value={keywords}
        />
        <div className="w-72">
          <Select
            label="Material"
            value={material}
            onChange={(value) => {
              setMaterial(value);
            }}
            color="green"
          >
            {MATERIAL_LIST.map((m) => (
              <Option value={m}>{materialTypeToString(m)}</Option>
            ))}
          </Select>
        </div>
        <div className="w-72">
          <Select
            label="Empresa"
            value={company?.toString()}
            onChange={(value) => {
              setCompany(value === undefined ? undefined : +value);
            }}
            color="green"
          >
            {companiesFoo.map((m) => (
              <Option value={m.id.toString()}>{m.name}</Option>
            ))}
          </Select>
        </div>
        <Button
          variant="gradient"
          color="red"
          size="sm"
          onClick={() => {
            setKeywords("");
            setCompany(undefined);
            setMaterial(undefined);
          }}
        >
          Limpar pesquisa
        </Button>
      </div>
      <br />
      <div className="flex flex-wrap flex flex-wrap w-full justify-around gap-3">
        {filteredAds.length > 0 ? (
          filteredAds.map((ad) => <AdvertisementCard advertisement={ad} />)
        ) : (
          <Typography color="gray" className="font-normal opacity-75">
            Não encontramos nenhum resultado para sua busca.
          </Typography>
        )}
        <Button
          onClick={async () => {
            const foo = await getAdvertisements();

            console.log(foo);
          }}
        >
          Boooo
        </Button>
      </div>
    </>
  );
}
