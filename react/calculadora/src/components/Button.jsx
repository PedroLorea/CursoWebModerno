import React from 'react'
import './Button.css'

//Sempre tentar fazer componentes sem estado

export default props =>
    <button onClick={e => props.click && props.click(props.label)} className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}>
        {props.label}
    </button>