import React from 'react'
import {
  Button,
} from "@material-tailwind/react";

interface Props { }

const MyAdvertisementScreen = () => {
  return <div>ISSO SÓ DEVE SER VISTO POR ANUNCIANTES
    <div className="flex flex-col items-center gap-3">
    <Button>Editar anúncios</Button>
    </div>
  </div>
}

export default MyAdvertisementScreen