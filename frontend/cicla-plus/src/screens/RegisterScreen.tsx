import React from "react";

export default function RegisterScreen() {
    const handleCancelClick = () => {
        window.location.href = "/";
    }

    return (
        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="nome" className="block text-sm font-medium leading-6 text-gray-900">
                                Primeiro Nome
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="nome"
                                    id="nome"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="sobrenome" className="block text-sm font-medium leading-6 text-gray-900">
                                Sobrenome
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="sobrenome"
                                    id="sobrenome"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="estado" className="block text-sm font-medium leading-6 text-gray-900">
                                Estado
                            </label>
                            <div className="mt-2">
                                <select
                                    id="estado"
                                    name="estado"
                                    autoComplete="estado-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option></option>
                                    <option>RS</option>
                                    <option>SC</option>
                                    <option>PR</option>
                                    <option>RJ</option>
                                    <option>SP</option>
                                    <option>MG</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="rua" className="block text-sm font-medium leading-6 text-gray-900">
                                Rua
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="rua"
                                    id="rua"
                                    autoComplete="rua"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="cidade" className="block text-sm font-medium leading-6 text-gray-900">
                                Cidade
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="cidade"
                                    id="cidade"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="bairro" className="block text-sm font-medium leading-6 text-gray-900">
                                Bairro
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="bairro"
                                    id="bairro"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="cep" className="block text-sm font-medium leading-6 text-gray-900">
                                CEP
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="cep"
                                    id="cep"
                                    autoComplete="cep"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="senha" className="block text-sm font-medium leading-6 text-gray-900">
                                Senha
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name="senha"
                                    id="senha"
                                    autoComplete="new-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="confirmarSenha" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirmar Senha
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name="confirmarSenha"
                                    id="confirmarSenha"
                                    autoComplete="new-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900"
                 onClick={handleCancelClick}>
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    );
};