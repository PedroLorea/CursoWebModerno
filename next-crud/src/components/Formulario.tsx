import { useState } from "react"
import Entrada from "./Entrada"
import Cliente from "../core/Cliente"
import Botao from "./Botao"

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente : Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps){
    
    const id = props.cliente?.getId
    const [nome, setNome] = useState(props.cliente?.getNome ?? '')
    const [idade, setIdade] = useState(props.cliente?.getIdade ?? 0)
    
    return (
        <div>
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id}/>
            ) : false }
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-5"/>
            <Entrada texto="Idade" tipo = "number" valor={idade} valorMudou={setIdade} className="mb-5"/>
        
        {/* idade é string, mas se coloca +idade, vira inteiro (linha de baixo) */}
            <div className="flex justify-end mt-7">  
                <Botao cor="blue" className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}