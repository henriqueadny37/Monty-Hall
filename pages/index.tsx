import styles from "../styles/Formulario.module.css"
import Cartao from "@/Components/Cartao";
import Link from "next/link";
import EntradaNumerica from "@/Components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {

  const [qtdePortas, setPortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.Formulario}>
      <div>
        <Cartao bgcolor="#FF1C0D">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="qtde portas" value={qtdePortas} 
              onChange={novaQtde => setPortas(novaQtde)}/>
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Com Presente" value={comPresente}
          onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
        </Cartao>
        <Cartao bgcolor="#199141">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} className={styles.link}>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}