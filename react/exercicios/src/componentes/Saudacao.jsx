import React, {Component} from 'react'

export default class Saudacao extends Component{

    //props não pode ser alterado, para isso usa-se o state
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props){
        super(props) //manter a compatibilidade, super no caso é o Component
        
        this.setTipo = this.setTipo.bind(this) //passa a instância de Saudação
        this.setTipo = this.setNome.bind(this)
        // para colocar onChange={this.setTipo} la no input
    }

    setTipo(e){
        this.setState({ tipo: e.target.value }) //target no caso é o input
    }

    setNome(e){
        this.setState({ nome: e.target.value})
    }

    //Angular os dados mudam os componentes e os componentes mudam os dados
    //React o estado atualiza e o componente é atualizado

    render(){
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={e => this.setTipo(e)} />

                <input type="text" placeholder="Nome..." 
                    value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}