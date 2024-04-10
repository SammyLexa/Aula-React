import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer class="footer">
            <ul class="footer__lista">
                <li class="lista__link">
                    <a href="#">Idioma</a>
                </li>
                <li class="lista__link">
                    <a href="#">Contrato de assinatura</a>
                </li>
                <li class="lista__link">
                    <a href="#">Politica de privacidade</a>
                </li>
                <li class="lista__link">
                    <a href="#">Ajuda</a>
                </li>
            </ul>
            <p class="footer__texto">® Game Master's Gazzete. Todos os direitos reservados. Jornal e Blog. Conteúdo sujeito todas às terças e quintas.</p>
            <p class="footer__texto">Contato: exemplo@email.com.br | Telefone: (12) 1234-5678</p>
        </footer>
    )
}

export default Footer