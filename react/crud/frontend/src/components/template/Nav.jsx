import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Tarefa de casa: Refatorar em casa! Criar um nav-item para gerar os itens da navegação */}
            <Link to="/">
                <i className="fa fa-hom"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa users"></i> Usuários
            </Link>
        </nav>
    </aside>