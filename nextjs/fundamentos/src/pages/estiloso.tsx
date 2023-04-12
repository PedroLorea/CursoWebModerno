import estilotop from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'

export default function Estiloso(){
    return ( 
            //className="roxo" apenas se estiver no globals.css
        <Layout titulo="Exemplo de CSS Modularizado">
            <div className={estilotop.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}