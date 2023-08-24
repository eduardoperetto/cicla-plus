export function statusToString(status: string) {
  switch (status) {
    case "og":
      return "Em Andamento";
    case "de":
      return "Entregue";
    case "ca":
      return "Cancelada pelo anunciante";
    case "cs":
      return "Cancelada pelo forncedor";
    case "cm":
      return "Cancelado pela moderação";
    default:
      return "";
  }
}

export function statusToColor(status: string) {
  switch (status) {
    case "og":
      return "green";
    case "de":
      return "blue";
    case "ca":
      return "red";
    case "cs":
      return "red";
    case "cm":
      return "red";
    default:
      return undefined;
  }
}

export function statusToNumber(status: string) {
  switch (status) {
    case "og":
      return 1;
    case "de":
      return 2;
    case "ca":
    case "cm":
    case "cs":
    default:
      return 3;
  }
}
