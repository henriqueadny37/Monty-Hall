import PortaModel from "../Model/porta";
import styles from "../styles/Porta.module.css"
import Presente from "./Presente";

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}
export default function Porta(props: PortaProps) {
    const Porta = props.value
    const framecolor = Porta.framecolor && !Porta.aberta ? styles.framecolor : ''

    const alterarSelecao = e => props.onChange(Porta.alterarSelecao())
    const abrir = e => {
        e.stopPropagation()
        props.onChange(Porta.abrir())
    }

    function renderizarPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{Porta.numero}</div>
                <div className={styles.macaneta}
                    onClick={abrir}></div>
            </div>

        )
    }


    return (
        <div>
            <div className={styles.area} onClick={alterarSelecao}>
                <div className={`${styles.framework} ${framecolor}`}>
                    {Porta.fechada ? renderizarPorta() : Porta.temPresente ?
                        <Presente /> : false}
                </div>
            </div>
            <div className={styles.piso}></div>
        </div>
    )
}