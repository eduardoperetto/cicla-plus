import React, { useState } from "react";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [rua, setRua] = useState("");
  const [ruaError, setRuaError] = useState("");

  const [cidade, setCidade] = useState("");
  const [cidadeError, setCidadeError] = useState("");

  const [bairro, setBairro] = useState("");
  const [bairroError, setBairroError] = useState("");

  const [cep, setCep] = useState("");
  const [cepError, SetCepError] = useState("");

  const validateField = (value: any, type: string, setErrorFunction: any, errorMessage: string, setFunc: any) => {
    let regex: RegExp;
    switch (type) {
      case "email":
        regex = /^$|^[a-zA-Z0-9._-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
        break;
      case "sobrenome":
        regex = /^$|^[a-zA-Z ]{2,}$/;
        break;
      case "nome":
        regex = /^$|^[a-zA-Z ]{2,}$/;
        break;
      case "rua":
        regex = /^$|^[a-zA-Z0-9 ]{3,}$/;
        break;
      case "cidade":
        regex = /^$|^[a-zA-Z ]{3,}$/;
        break;
      case "bairro":
        regex = /^$|^[a-zA-Z ]{3,}$/;
        break;
      case "cep":
        regex = /^$|^[0-9\-]{8}$/;
        break;
    }

    if (!regex!.test(value)) {
      setErrorFunction(errorMessage);
    } else {
      setErrorFunction("");
    }

    setFunc(value);
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <form>
        <div className="space-y-8">
          <div className="border-b border-gray-900/10 pb-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div className="sm:col-span-3">
                <Input size="md" label="Nome da Empresa"
                />
              </div>

              <div className="sm:col-span-3">
                <Input size="md" label="CNPJ"
                />
              </div>

              <div className="sm:col-span-4">
                <Input size="md" label="E-mail"
                  value={email}
                  onChange={(e) => validateField(e.target.value, "email", setEmailError, "Formato de e-mail inválido", setEmail)}
                />
                {emailError && (
                  <span className="text-red-500 text-sm">{emailError}</span>
                )}
              </div>

              <div className="sm:col-span-3">
                <Select label="Estado">
                  <Option> </Option>
                  <Option>RS</Option>
                  <Option>SC</Option>
                  <Option>PR</Option>
                  <Option>RJ</Option>
                  <Option>SP</Option>
                  <Option>MG</Option>
                </Select>
              </div>
              <div className="col-span-full">
                <Input size="md" label="Rua"
                  value={rua}
                  onChange={(e) => validateField(e.target.value, "rua", setRuaError, "Rua inválida", setRua)}
                />
                {ruaError && (
                  <span className="text-red-500 text-sm">{ruaError}</span>
                )}
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <Input size="md" label="Cidade"
                  value={cidade}
                  onChange={(e) => validateField(e.target.value, "cidade", setCidadeError, "Cidade inválida", setCidade)}
                />
                {cidadeError && (
                  <span className="text-red-500 text-sm">{cidadeError}</span>
                )}
              </div>

              <div className="sm:col-span-2">
                <Input size="md" label="Bairro"
                  value={bairro}
                  onChange={(e) => validateField(e.target.value, "bairro", setBairroError, "Bairro inválido", setBairro)}
                />
                {bairroError && (
                  <span className="text-red-500 text-sm">{bairroError}</span>
                )}
              </div>

              <div className="sm:col-span-2">
                <Input size="md" label="CEP"
                  value={cep}
                  onChange={(e) => validateField(e.target.value, "cep", SetCepError, "CEP inválido", setCep)}
                />
                {cepError && (
                  <span className="text-red-500 text-sm">{cepError}</span>
                )}
              </div>

              <div className="sm:col-span-3">
                <Input size="md" label="Senha" type="password" />
              </div>
              <div className="sm:col-span-3">
                <Input size="md" label="Confirmar Senha" type="password" />
              </div>
            </div>
          </div>
        </div>
    <div className="mt-6 flex items-center justify-end">
      <Link to="/login">
        <Button
          variant="text"
          color="red"
          className="mr-1"
          size="sm"
        >
          Cancelar
        </Button>
      </Link>
      <Link to="/login">
        <Button
          color="green"
          variant="gradient"
          size="sm">
          Confirmar
        </Button>
      </Link>
    </div>
    </form >
    </div >
  );
}