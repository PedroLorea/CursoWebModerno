import Cabecalho from "../components/Cabecalho";

export default function Exemplo(){
    return (
        <div>
        <Cabecalho nome ="xyz" idade={123} ehLegal={true}/>
        <Cabecalho nome="dale"/>
        </div>
    )

    

    //para colocar dois componentes pode colocar um html vazio sem uma div
}