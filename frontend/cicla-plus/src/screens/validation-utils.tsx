export { };

export const validateField = (value: any, type: string, setErrorFunction: any, errorMessage: string, setFunc: any) => {
    let regex: RegExp;
    switch (type) {
        case "email":
            regex = /^$|^[a-zA-Z0-9._-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
            break;
        case "sobrenome":
            regex = /^$|^[a-zA-ZçÇ ]{2,}$/;
            break;
        case "nome":
            regex = /^$|^[a-zA-ZçÇ ]{2,}$/;
            break;
        case "rua":
            regex = /^$|^[a-zA-ZçÇ0-9 ]{3,}$/;
            break;
        case "cidade":
            regex = /^$|^[a-zA-ZçÇ ]{3,}$/;
            break;
        case "bairro":
            regex = /^$|^[a-zA-ZçÇ ]{3,}$/;
            break;
        case "cep":
            regex = /^$|^[0-9\-]{8}$/;
            break;
        case "cnpj":
            regex = /^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2}$/;
            break;
        case "cpf":
            regex = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/;
            break;
    }

    if (!regex!.test(value)) {
        setErrorFunction(errorMessage);
    } else {
        setErrorFunction("");
    }

    setFunc(value);
};