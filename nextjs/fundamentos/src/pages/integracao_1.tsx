export default function Integracao(){

    //assíncrono
    fetch('http://localhost:3000/api/clientes/123')
        .then(resp => resp.json())
        .then(dados => console.log(dados))

    return (
        <div>
            <ul>
                <li>Código: </li>
                <li>Nome: </li>
                <li>Email: </li>
            </ul>
        </div>
    )
}