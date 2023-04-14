import Cabecalho from "../components/Cabecalho";
import Layout from '../components/Layout'

export default function Exemplo(){
    return (
        <Layout titulo ="Usando Componentes">
            <Cabecalho nome ="xyz" idade={123} ehLegal={true}/>
            <Cabecalho nome="dale"/>
        </Layout>
    )
}
    

    //para colocar dois componentes pode colocar um html vazio sem uma div
