import React, { useState } from "react";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { validateField } from "./RegisterUtils";

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

  const [cnpj, setCNPJ] = useState("");
  const [CNPJError, setCNPJError] = useState("");

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
                  value={cnpj}
                  onChange={(e) => validateField(e.target.value, "cnpj", setCNPJError, "CNPJ inválido", setCNPJ)}
                />
                {CNPJError && (
                  <span className="text-red-500 text-sm">{CNPJError}</span>
                )}
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
                  <Option>AC</Option>
                  <Option>AL</Option>
                  <Option>AP</Option>
                  <Option>AM</Option>
                  <Option>BA</Option>
                  <Option>CE</Option>
                  <Option>DF</Option>
                  <Option>ES</Option>
                  <Option>GO</Option>
                  <Option>MA</Option>
                  <Option>MT</Option>
                  <Option>MS</Option>
                  <Option>MG</Option>
                  <Option>PA</Option>
                  <Option>PB</Option>
                  <Option>PR</Option>
                  <Option>PE</Option>
                  <Option>PI</Option>
                  <Option>RJ</Option>
                  <Option>RN</Option>
                  <Option>RS</Option>
                  <Option>RO</Option>
                  <Option>RR</Option>
                  <Option>SC</Option>
                  <Option>SP</Option>
                  <Option>SE</Option>
                  <Option>TO</Option>
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