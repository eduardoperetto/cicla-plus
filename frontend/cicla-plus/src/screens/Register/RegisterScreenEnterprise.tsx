import React, { useState } from "react";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { validateField } from "../validation-utils";
import { useDispatch } from "../../store/configureStore";
import { RegisterCompanyAction } from "../../actions/companies";

export default function RegisterScreen() {
  const dispatch = useDispatch();
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

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleConfirm = async () => {
    const phone = "323412412";
    const nome = "nana";
    const ult_nome = "kakak";

    const result = await dispatch(
      RegisterCompanyAction(
        email,
        email,
        nome,
        ult_nome,
        password,
        confirmPassword,
        rua,
        phone,
        cnpj,
      )
    );
    if (!result.ok) {
      alert("Ocorreu um erro, por favor tente novamente");
      return;
    }

    alert("Seu cadastro foi realizado com sucesso, prossiga para o login!");
    window.location.replace("/");
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <form>
        <div className="space-y-8">
          <div className="border-b border-gray-900/10 pb-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <Input size="md" label="Nome da Empresa" />
              </div>

              <div className="sm:col-span-2">
                <Input
                  size="md"
                  label="CNPJ"
                  value={cnpj}
                  onChange={(e) =>
                    validateField(
                      e.target.value,
                      "cnpj",
                      setCNPJError,
                      "CNPJ inválido",
                      setCNPJ
                    )
                  }
                />
                {CNPJError && (
                  <span className="text-red-500 text-sm">{CNPJError}</span>
                )}
              </div>

              <div className="sm:col-span-2">
                <Input
                  size="md"
                  label="Localização"
                  ></Input>
              </div>

              <div className="sm:col-span-4">
                <Input
                  size="md"
                  label="E-mail"
                  value={email}
                  onChange={(e) =>
                    validateField(
                      e.target.value,
                      "email",
                      setEmailError,
                      "Formato de e-mail inválido",
                      setEmail
                    )
                  }
                />
                {emailError && (
                  <span className="text-red-500 text-sm">{emailError}</span>
                )}
              </div>


              <div className="sm:col-span-2">
                <Input
                  size="md"
                  label="Telefone"
                  ></Input>
                  </div>

              <div className="sm:col-span-3">
                <Input
                  type="password"
                  size="md"
                  label="Senha"
                  value={password}
                  onChange={(e) =>
                    validateField(
                      e.target.value,
                      "password",
                      setPasswordError,
                      "A senha deve conter pelo menos 8 caracteres",
                      setPassword
                    )
                  }
                />
                {passwordError && (
                  <span className="text-red-500 text-sm">{passwordError}</span>
                )}
              </div>

              <div className="sm:col-span-3">
                <Input
                  type="password"
                  size="md"
                  label="Confirme a Senha"
                  value={confirmPassword}
                  onChange={(e) =>
                    validateField(
                      e.target.value,
                      "password",
                      setConfirmPasswordError,
                      "A senha deve conter pelo menos 8 caracteres",
                      setConfirmPassword
                    )
                  }
                />
                {confirmPasswordError && (
                  <span className="text-red-500 text-sm">
                    {confirmPasswordError}
                  </span>
                )}
                {password !== confirmPassword && (
                  <span className="text-red-500 text-sm">
                    As senhas não coincidem
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end">
          <Link to="/login">
            <Button variant="text" color="red" className="mr-1" size="sm">
              Cancelar
            </Button>
          </Link>
          <Link to="/login">
            <Button color="green" variant="gradient" size="sm"
            onClick={handleConfirm}>
              Confirmar
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
