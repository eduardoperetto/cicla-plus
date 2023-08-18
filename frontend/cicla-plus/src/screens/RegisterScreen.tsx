import React from "react";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function RegisterScreen() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
    <form>
      <div className="space-y-8">
        <div className="border-b border-gray-900/10 pb-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-3">
              <Input size="md" label="Primeiro Nome" />
            </div>

            <div className="sm:col-span-3">
              <Input size="md" label="Sobrenome" />
            </div>

            <div className="sm:col-span-4">
              <Input size="md" label="E-mail" />
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
              <Input size="md" label="Rua" />
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <Input size="md" label="Cidade" />
            </div>

            <div className="sm:col-span-2">
              <Input size="md" label="Bairro" />
            </div>

            <div className="sm:col-span-2">
              <Input size="md" label="CEP" />
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
        <Link to="/login"> {/* Use Link para redirecionar */}
        <Button
            variant="text"
            color="red"
            className="mr-1"
            size="sm"
          >
            Cancelar
          </Button>
        </Link>
        <Link to="/login"> {/* Use Link para redirecionar */}
          <Button 
          color="green" 
          variant="gradient" 
          size="sm">
            Confirmar
          </Button>
        </Link>
      </div>
    </form>
    </div>
  );
}