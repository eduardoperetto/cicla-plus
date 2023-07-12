export function materialTypeToString(material: string) {
  switch (material) {
    case "is":
      return "Isopor";
    case "pl":
      return "Plástico";
    case "vd":
      return "Vidro";
    case "pp":
      return "Papel";
    case "po":
      return "Papelão";
    case "mt":
      return "Metal";
    default:
      return "";
  }
}
