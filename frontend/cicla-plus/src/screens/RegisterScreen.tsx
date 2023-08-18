import React from "react";
import { Button, Input, Select } from "@material-tailwind/react";

export default function RegisterScreen() {
  return (
    <form>
      <div className="space-y-8">
        <div className="border-b border-gray-900/10 pb-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="nome" className="block text-sm font-medium leading-6 text-gray-900">
                Primeiro Nome
              </label>
              <Input type="text" placeholder="Primeiro Nome" />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="sobrenome" className="block text-sm font-medium leading-6 text-gray-900">
                Sobrenome
              </label>
              <Input type="text" placeholder="Sobrenome" />
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <Input type="email" placeholder="Email" />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="estado" className="block text-sm font-medium leading-6 text-gray-900">
                Estado
              </label>
              <Select>
                <option value=""></option>
                <option value="RS">RS</option>
                <option value="SC">SC</option>
                <option value="PR">PR</option>
                <option value="RJ">RJ</option>
                <option value="SP">SP</option>
                <option value="MG">MG</option>
              </Select>
            </div>

            <div className="col-span-full">
              <label htmlFor="rua" className="block text-sm font-medium leading-6 text-gray-900">
                Rua
              </label>
              <Input type="text" placeholder="Rua" />
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="cidade" className="block text-sm font-medium leading-6 text-gray-900">
                Cidade
              </label>
              <Input type="text" placeholder="Cidade" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="bairro" className="block text-sm font-medium leading-6 text-gray-900">
                Bairro
              </label>
              <Input type="text" placeholder="Bairro" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="cep" className="block text-sm font-medium leading-6 text-gray-900">
                CEP
              </label>
              <Input type="text" placeholder="CEP" />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="senha" className="block text-sm font-medium leading-6 text-gray-900">
                Senha
              </label>
              <Input type="password" placeholder="Senha" />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="confirmarSenha" className="block text-sm font-medium leading-6 text-gray-900">
                Confirmar Senha
              </label>
              <Input type="password" placeholder="Confirmar Senha" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
        >
          Save
        </button>
      </div>
    </form>
  );
}
