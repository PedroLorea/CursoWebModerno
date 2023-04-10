import './Header.css'
import React from 'react'

export default props => //d-none = header será ocultado em telas displays (celular)    //d-sm-flex  display a partir de 576 pixels de largura //flex-column = organizados em uma única coluna de maneira flex
    <header className="header d-none d-sm-flex flex-column"> 
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>