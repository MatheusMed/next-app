import { useState } from "react";
import { ButtonComponent } from "../../components/ButtonComponent";

function Sobre() {

  const [numero, setNumero] = useState(0);

  function handleAumentar() {
    setNumero(numero + 1);
  }

  return <div>
    <h1>Pagina Sobre numero: ({numero})</h1>

    <ButtonComponent label="Aumentar" onTap={handleAumentar} />
  </div>
}

export default Sobre;
