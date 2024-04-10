import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <header class="cabecalho">
            <img class="logo" src="https://th.bing.com/th/id/OIP.pMWOALismq9TpjxEMTqXfAHaD4?rs=1&pid=ImgDetMain"
                alt="A logo do site Game Master's Gazette, um dado de 20 lados." />
            <nav class="menu">
                <ul class="menu__lista">
                    <li class="menu__item">
                        <Link to="/home" class="menu__link ativo">Home</Link>
                    </li>
                    <li class="menu__item">
                        <Link to='/quem-somos' class="menu__link">Quem somos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar