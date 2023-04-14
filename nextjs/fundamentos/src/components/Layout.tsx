import Link from 'next/link'
import styles from '../styles/Layout.module.css'

export default function Layout(props: any){
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? 'Mais um exemplo'}</h1> {/* ?? = valor padrão caso não receba nada*/}
                <Link href="/">Voltar</Link>
            </div>
            <div className={styles.conteudo}>
                {props.children} {/* children é a div dentro do Layout no estiloso.tsx*/} 
            </div>

        </div>
    )
}