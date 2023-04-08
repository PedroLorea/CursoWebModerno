import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Tarefa de casa: Refatorar em casa! Criar um nav-item para gerar os itens da navegação */}
            <a href="#/">
                <i className="fa fa-hom"></i> Início
            </a>
            <a href="#/users">
                <i className="fa users"></i> Usuários
            </a>
        </nav>
    </aside>