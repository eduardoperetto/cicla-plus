import React from "react";
import { Material } from "../../types/Material";

export function MaterialImage({ material }: { material: Material }) {
  let imageName;
  switch (material) {
    case "is":
      imageName = "isopor.jpg";
      break;
    case "pl":
      imageName = "plastico.jpg";
      break;
    case "vd":
      imageName = "vidro.jpg";
      break;
    case "pp":
      imageName = "papel.png";
      break;
    case "po":
      imageName = "papelao.jpeg";
      break;
    case "mt":
      imageName = "metal.jpg";
      break;
  }
  const imagePath = require("./img/" + imageName);

  return <img className="w-full h-full object-cover" src={imagePath} alt="" />;
}
