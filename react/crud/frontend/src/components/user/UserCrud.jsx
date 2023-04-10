import React, {Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: ''},
    list: []
}

export default class UserCrud extends Component{
    
    state = {...initialState}

    componentWillMount(){ //quando inciailizar o front end trazer os dados do backend
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear(){
        this.setState({user: initialState.user})
    }

    save(){
        const user = this.state.user // bom pegar a referência e não mudar o estado
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({user: initialState.user, list}) //limpa form
            })
    }

    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id)//filter gera uma nova lista
        list.unshift(user) //coloca elemento na 1º posição do array
        return list
    }

    updateField(event){
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6"> //celulares 12 colunas, medio grande e extragrande 6 colunas
                        <div className="form-gruop">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-gruop">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o email..." />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    
    load(user){
        this.setState({ user })
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.state.list.filter(u => u !== user) //cria uma nova list sem o user
            this.setState({ list })
        })
    }
        
    render(){
        
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}