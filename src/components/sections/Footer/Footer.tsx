import * as React from 'react';
import './Footer.css'

import icon from '../../../assets/icon-orbital.svg' 


const Footer = () => (
    <footer>
    <div className="container">
        <div className="icon-orbital">
            <img src={icon} alt="" />
        </div>

        <span className="footer-text">Copyright &copy; 2021 Orbital</span>
        <span className="footer-text">Todos os direitos reservados</span>
    </div>
</footer>
)

export default Footer