import { useState } from "react";
import { ButtonComponent } from "../../components/ButtonComponent";

import styles from '../../styles/Sobre.module.css';

function Sobre() {

  const [numero, setNumero] = useState(0);

  function handleAumentar() {
    setNumero(numero + 1);
  }

  return (
    <div>
      <h1 className={styles.sobreTitle} >Pagina Sobre numero: ({numero})</h1>

      <ButtonComponent label="Aumentar" onTap={handleAumentar} />


    </div>
  );
}

export default Sobre;
