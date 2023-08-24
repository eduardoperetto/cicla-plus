import React, { useState } from "react";
import { Button, Input, Option, Select } from "@material-tailwind/react";
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
        rua,
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
    window.location.reload();
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

              <div className="sm:col-span-2">
                <Input
                  size="md"
                  label="Cidade"
                  value={cidade}
                  onChange={(e) =>
                    validateField(
                      e.target.value,
                      "cidade",
                      setCidadeError,
                      "Cidade inválida",
                      setCidade
                    )
                  }
                />
                {cidadeError && (
                  <span className="text-red-500 text-sm">{cidadeError}</span>
                )}
              </div>

              <div className="col-span-full">
                <Input
                  size="md"
                  label="Rua"
                  value={rua}
                  onChange={(e) =>
                    validateField(
                      e.target.value,
                      "rua",
                      setRuaError,
                      "Rua inválida",
                      setRua
                    )
                  }
                />
                {ruaError && (
                  <span className="text-red-500 text-sm">{ruaError}</span>
                )}
              </div>

              <div className="sm:col-span-2">
                <Input
                  size="md"
                  label="Bairro"
                  value={bairro}
                  onChange={(e) =>
                    validateField(
                      e.target.value,
                      "bairro",
                      setBairroError,
                      "Bairro inválido",
                      setBairro
                    )
                  }
                />
                {bairroError && (
                  <span className="text-red-500 text-sm">{bairroError}</span>
                )}
              </div>

              <div className="sm:col-span-2">
                <Input
                  size="md"
                  label="CEP"
                  value={cep}
                  onChange={(e) =>
                    validateField(
                      e.target.value,
                      "cep",
                      SetCepError,
                      "CEP inválido",
                      setCep
                    )
                  }
                />
                {cepError && (
                  <span className="text-red-500 text-sm">{cepError}</span>
                )}
              </div>

              <div className="sm:col-span-3">
                <Input
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
