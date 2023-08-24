import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { validateField } from "../validation-utils";
import { RegisterPersonAction } from "../../actions/persons";
import { useDispatch } from "../../store/configureStore";

export default function RegisterScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [nome, setNome] = useState("");
  const [nomeError, setNomeError] = useState("");

  const [sobrenome, setSobrenome] = useState("");
  const [sobrenomeError, setSobrenomeError] = useState("");

  const [localizacao, setLocalizacao] = useState("");
  const [localizacaoError, setLocalizacaoError] = useState("");

  const [cpf, setCPF] = useState("");
  const [CPFError, setCPFError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleConfirm = async () => {
    const phone = "323412412";
    const birthdate = "2013-09-02";

    const result = await dispatch(
      RegisterPersonAction(
        email,
        email,
        nome,
        sobrenome,
        password,
        confirmPassword,
        localizacao,
        phone,
        cpf,
        birthdate
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
              <div className="sm:col-span-3">
                <Input
                  size="md"
                  label="Primeiro nome"
                  value={nome}
                  onChange={(e) =>
                    validateField(
                      e.target.value,
                      "nome",
                      setNomeError,
                      "Nome inválido",
                      setNome
                    )
                  }
                />
                {nomeError && (
                  <span className="text-red-500 text-sm">{nomeError}</span>
                )}
              </div>

              <div className="sm:col-span-3">
                <Input
                  size="md"
                  label="Sobrenome"
                  value={sobrenome}
                  onChange={(e) =>
                    validateField(
                      e.target.value,
                      "sobrenome",
                      setSobrenomeError,
                      "Sobrenome inválido",
                      setSobrenome
                    )
                  }
                />
                {sobrenomeError && (
                  <span className="text-red-500 text-sm">{sobrenomeError}</span>
                )}
              </div>

              <div className="sm:col-span-3">
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

              <div className="sm:col-span-3">
                <Input
                  size="md"
                  label="CPF"
                  value={cpf}
                  onChange={(e) =>
                    validateField(
                      e.target.value,
                      "cpf",
                      setCPFError,
                      "CPF inválido",
                      setCPF
                    )
                  }
                />
                {CPFError && (
                  <span className="text-red-500 text-sm">{CPFError}</span>
                )}
              </div>

              <div className="sm:col-span-2">
                <Input
                  size="md"
                  label="Localização"
                  value={localizacao}
                  onChange={(e) =>
                    validateField(
                      e.target.value,
                      "rua",
                      setLocalizacaoError,
                      "Localização Inválida",
                      setLocalizacao
                    )
                  }
                />
                {localizacaoError && (
                  <span className="text-red-500 text-sm">
                    {localizacaoError}
                  </span>
                )}
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
          <Button
            color="green"
            variant="gradient"
            size="sm"
            onClick={handleConfirm}
          >
            Confirmar
          </Button>
        </div>
      </form>
    </div>
  );
}
