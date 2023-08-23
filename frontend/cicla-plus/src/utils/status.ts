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

export function statusToHidden(status: string) {
  switch (status) {
    case "og":
      return "green";
    case "de":
      return "blue";
    case "ca":
      return "red";
    case "cm":
      return "red";
    case "cs":
      return "red";
    default:
      return undefined;
  }
}
