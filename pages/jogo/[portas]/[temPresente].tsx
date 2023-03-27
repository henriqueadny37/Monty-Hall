import styles from "../../../styles/Jogo.module.css"
import Porta from "../../../Components/Porta"
import { useEffect, useState } from "react"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import Link from "next/link"
import { useRouter } from "next/router"

export default function jogo(){
    const router = useRouter()

    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
         
        const qtdePortasvalida = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente >= 1 && temPresente <= portas

        setValido(qtdePortasvalida && temPresenteValido)
    },[portas])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
         setPortas(criarPortas(portas, temPresente))
    },[router?.query])

    function renderizarPortas(){
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta}
            onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }

    return(
        <div id={styles.Jogo}>
            <div className={styles.portas}>
                {valido ? 
                renderizarPortas() :
                <h1>Valores inválidos</h1>
                }
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button style={{cursor:"pointer"}}>Reiniciar</button>
                </Link>
            </div>
        </div>
    )
}







// export default function jogo() {
    //     const [portas, setPortas] = useState(criarPortas(4, 3))
    
    //     function renderizarPortas() {
    //         return portas.map(porta => {
    //             return <Porta key={porta.numero} value={porta}
    //                 onChange={novaPorta => setPortas(atualizarPortass(portas, novaPorta))} />
    //         })
        
    
    //         return (
    //             <div id={styles.jogo}>
    //                 <div className={styles.portas}>
    //                     {renderizarPortas()}
    //                 </div>
    //                 <div className={styles.botoes}>
    //                     <Link href={"/"}>
    //                         <button>
    //                             Reiniciar
    //                         </button>
    //                     </Link>
    //                 </div>
    //             </div>
    //         )
    //     }