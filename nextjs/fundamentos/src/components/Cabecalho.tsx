export default function Cabecalho(abc: any){ //abc = normalmente props

    //abc.idade = abc.idade + "a" Não consegue fazer isso
    //props é somente leitura
    
    console.log(abc.idade)
    return (
        <header>
            <h1>{abc.nome} dale</h1>
        </header>
    )
}