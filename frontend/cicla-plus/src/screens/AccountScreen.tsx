import React from "react";
import { PersonState, isPersonsLoading } from "../reducers/persons";
import { store, useSelector } from "../store/configureStore";
import { CompanyState, isCompaniesLoading } from "../reducers/companies";
import { Spinner, Typography } from "@material-tailwind/react";

export default function UserProfile() {
  const loginState = store.getState().login;
  const username = loginState.user;
  const is_company = loginState.is_company;
  const is_admin = loginState.is_admin;
  const companiesState = useSelector(CompanyState);
  const personsState = useSelector(PersonState);

  if (isCompaniesLoading(companiesState) || isPersonsLoading(personsState))
    return <Spinner className="h-12 w-12" />;

  if (
    companiesState.tag === "ERROR" ||
    personsState.tag === "ERROR" ||
    username === null
  )
    return (
      <Typography color="gray" className="font-normal opacity-75">
        Ocorreu um erro, por favor tente novamente
      </Typography>
    );

  if (is_admin) {
    return (
      <div className="bg-white overflow-hidden shadow rounded-lg border">
        <div className="flex justify-between items-center">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Perfil de Admnistrador
            </h3>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Usuário</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {username}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    );
  }

  const person = personsState.persons.find((c) => c.user.username === username);
  const company = companiesState.companies.find(
    (c) => c.user.username === username
  );

  if (person === undefined && company === undefined) {
    return (
      <Typography color="gray" className="font-normal opacity-75">
        Ocorreu um erro, por favor tente novamente
      </Typography>
    );
  }
  const user = is_company ? company?.user : person?.user;

  if (user === undefined) {
    return (
      <Typography color="gray" className="font-normal opacity-75">
        Ocorreu um erro, por favor tente novamente
      </Typography>
    );
  }

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border">
      <div className="flex justify-between items-center">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Perfil
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Informações gerais
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Nome</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {user.first_name + " " + user.last_name}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">E-mail</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {user.username}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              {is_company ? "CNPJ" : "CPF"}
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {is_company ? company?.cnpj : person?.cpf}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Localização</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {is_company ? company?.location : person?.location}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
