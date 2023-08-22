import React, { useState } from "react";
import  
{ 
  Button,
  Input
} from "@material-tailwind/react";

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Aqui você pode adicionar a lógica para salvar os dados atualizados no backend
  };

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Perfil
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Informações gerais
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Nome
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (<Input type="text" defaultValue="John" className="border rounded-md p-1 w-full"/>) : ("John")}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Sobrenome
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (<Input type="text" defaultValue="Doe" className="border rounded-md p-1 w-full"/>) : ("Doe")}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              E-mail
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (<Input type="text" defaultValue="johndoe@example.com" className="border rounded-md p-1 w-full"/>) : ("johndoe@example.com")}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              CPF
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (<Input type="text" defaultValue="2821984531839" className="border rounded-md p-1 w-full"/>) : ("2821984531839")}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Rua
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (<Input type="text" defaultValue="Cafundó" className="border rounded-md p-1 w-full"/>) : ("Cafundó")}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Cidade
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (<Input type="text" defaultValue="Ivoti" className="border rounded-md p-1 w-full"/>) : ("Ivoti")}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Bairro
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (<Input type="text" defaultValue="Paçoca" className="border rounded-md p-1 w-full"/>) : ("Paçoca")}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              CEP
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (
              <Input type="text" defaultValue="12345678" className="border rounded-md p-1 w-full"/>) : ("12345678")}
            </dd>
          </div>
        </dl>
      </div>
      <div className="flex justify-end px-4 py-3 sm:px-6">
        {isEditing ? (
        <Button onClick={handleSaveClick} className="mr-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" color = "red">
          Salvar Conta
        </Button>
        ) : (
        <Button onClick={handleEditClick} className="mr-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" color = "red">
          Editar Conta
        </Button>
        )}
      </div>
    </div>
  );
}

