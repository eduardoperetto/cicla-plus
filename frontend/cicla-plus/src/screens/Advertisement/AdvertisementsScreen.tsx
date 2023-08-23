import React, { useState } from "react";
import {
  Button,
  Input,
  Select,
  Option,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { materialTypeToString } from "../../utils/material";
import { AdvertisementCard } from "./AdvertisementCard";
import { useSelector } from "../../store/configureStore";
import {
  AdvertisementState,
  isAdvertisementsLoading,
} from "../../reducers/advertisements";
import { CompanyState, isCompaniesLoading } from "../../reducers/companies";

const MATERIAL_LIST = ["is", "pl", "vd", "pp", "po", "mt"];

export default function AdvertisementsScreen() {
  const [keywords, setKeywords] = useState("");
  const [company, setCompany] = useState<undefined | number>(undefined);
  const [material, setMaterial] = useState<undefined | string>(undefined);

  const advertisementsState = useSelector(AdvertisementState);
  const companiesState = useSelector(CompanyState);

  if (
    isAdvertisementsLoading(advertisementsState) ||
    isCompaniesLoading(companiesState)
  )
    return <Spinner className="h-12 w-12" />;

  if (advertisementsState.tag === "ERROR" || companiesState.tag === "ERROR")
    return (
      <Typography color="gray" className="font-normal opacity-75">
        Ocorreu um erro, por favor tente novamente
      </Typography>
    );

  const advertisements = advertisementsState.advertisements.filter(
    (a) => !a.hidden
  );
  const companies = companiesState.companies;

  const filteredAds = advertisements.filter(
    (ad) =>
      ad.material_description.toLowerCase().includes(keywords.toLowerCase()) &&
      (material !== undefined ? ad.material_type === material : true) &&
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
            {companies.map((m) => (
              <Option value={m.id.toString()}>{m.user.first_name}</Option>
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
      </div>
    </>
  );
}
