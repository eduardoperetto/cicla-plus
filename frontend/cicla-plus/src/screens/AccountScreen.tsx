import React, { useState } from "react";
import  
{ 
  Button,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch } from "../store/configureStore";
import { logoutAction } from "../actions/login";
import { validateField } from "./validation-utils";

export default function UserProfile() {

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [nome, setNome] = useState("");
  const [nomeError, setNomeError] = useState("");

  const [sobrenome, setSobrenome] = useState("");
  const [sobrenomeError, setSobrenomeError] = useState("");

  const [rua, setRua] = useState("");
  const [ruaError, setRuaError] = useState("");

  const [cidade, setCidade] = useState("");
  const [cidadeError, setCidadeError] = useState("");

  const [bairro, setBairro] = useState("");
  const [bairroError, setBairroError] = useState("");

  const [cep, setCep] = useState("");
  const [cepError, SetCepError] = useState("");

  const [cpf, setCPF] = useState("");
  const [CPFError, setCPFError] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Aqui você pode adicionar a lógica para salvar os dados atualizados no backend
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const dispatch = useDispatch();

  const logout = async () => {
    await dispatch(logoutAction());
  };

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
            <dt className="text-sm font-medium text-gray-500">
              Nome
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (<div className="sm:col-span-3">
                <Input size="md" label="Primeiro nome"
                  value={nome}
                  onChange={(e) => validateField(e.target.value, "nome", setNomeError, "Nome inválido", setNome)}
                />
                {nomeError && (
                  <span className="text-red-500 text-sm">{nomeError}</span>
                )}
              </div>) : ("John")}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Sobrenome
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (<div className="sm:col-span-3">
                <Input size="md" label="Sobrenome"
                  value={sobrenome}
                  onChange={(e) => validateField(e.target.value, "sobrenome", setSobrenomeError, "Sobrenome inválido", setSobrenome)}
                />
                {sobrenomeError && (
                  <span className="text-red-500 text-sm">{sobrenomeError}</span>
                )}
              </div>) : ("Doe")}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              E-mail
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (<div className="sm:col-span-3">
                <Input size="md" label="E-mail"
                  value={email}
                  onChange={(e) => validateField(e.target.value, "email", setEmailError, "Formato de e-mail inválido", setEmail)}
                />
                {emailError && (
                  <span className="text-red-500 text-sm">{emailError}</span>
                )}
              </div>) : ("johndoe@example.com")}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              CPF
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (<div className="sm:col-span-3">
                <Input size="md" label="CPF"
                  value={cpf}
                  onChange={(e) => validateField(e.target.value, "cpf", setCPFError, "CPF inválido", setCPF)}
                />
                {CPFError && (
                  <span className="text-red-500 text-sm">{CPFError}</span>
                )}
              </div>) : ("2821984531839")}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Rua
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (<div className="col-span-full">
                <Input size="md" label="Rua"
                  value={rua}
                  onChange={(e) => validateField(e.target.value, "rua", setRuaError, "Rua inválida", setRua)}
                />
                {ruaError && (
                  <span className="text-red-500 text-sm">{ruaError}</span>
                )}
              </div>) : ("Cafundó")}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Cidade
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (<div className="sm:col-span-2">
                <Input size="md" label="Cidade"
                  value={cidade}
                  onChange={(e) => validateField(e.target.value, "cidade", setCidadeError, "Cidade inválida", setCidade)}
                />
                {cidadeError && (
                  <span className="text-red-500 text-sm">{cidadeError}</span>
                )}
              </div>) : ("Ivoti")}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Bairro
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (<div className="sm:col-span-2">
                <Input size="md" label="Bairro"
                  value={bairro}
                  onChange={(e) => validateField(e.target.value, "bairro", setBairroError, "Bairro inválido", setBairro)}
                />
                {bairroError && (
                  <span className="text-red-500 text-sm">{bairroError}</span>
                )}
              </div>) : ("Paçoca")}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              CEP
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (
              <div className="sm:col-span-2">
              <Input size="md" label="CEP"
                value={cep}
                onChange={(e) => validateField(e.target.value, "cep", SetCepError, "CEP inválido", setCep)}
              />
              {cepError && (
                <span className="text-red-500 text-sm">{cepError}</span>
              )}
            </div>) : ("12345678")}
            </dd>
          </div>
        </dl>
      </div>
      <div className="flex justify-end px-4 py-3 sm:px-6">
        {isEditing ? (
        <Button onClick={handleSaveClick} className="mr-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
          Salvar Conta
        </Button>
        ) : (
        <div className="flex space-x-2">
        <Button 
          onClick={handleEditClick} 
          className="mr-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
          Editar Conta
        </Button>
        <Button
          onClick={handleDialogOpen}
          className="mr-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          Apagar Conta
        </Button>
        </div>
        )}
      </div>
       {dialogOpen &&
       <Dialog open={dialogOpen} handler={handleDialogClose}>
        <DialogHeader>Você tem certeza que deseja deletar seu cadastro?</DialogHeader>
        <DialogHeader className="mt-1 max-w-2xl text-sm text-red-700">Mudanças feitas não poderão ser revertidas</DialogHeader> 
        <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleDialogClose}
              className="mr-1"
              size="sm"
            >
              <span>Cancelar</span>
            </Button>
            <Button
              variant="text"
              color="green"
              onClick={() => logout()}
              className="mr-1"
              size="sm"
            >
              <span>Confirmar</span>
            </Button>
          </DialogFooter>
        </Dialog>}
    </div>
  );
}

