import './Logo.css'
import React from 'react'
import logo from '../../assets/imgs/logo.png'

export default props =>
    <aside className="Logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside>