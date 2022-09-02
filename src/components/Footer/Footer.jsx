import {BsInstagram, BsWhatsapp} from 'react-icons/bs'
import {Link, NavLink} from 'react-router-dom'

import React from 'react'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer>
        <nav className={s.footer__ContainerMenu}>
            <NavLink to="/" className={s.navLink}>Inicio</NavLink>
            <NavLink to="/nosotros" className={s.navLink}>Nosotros</NavLink>
            <NavLink to="/productos" className={s.navLink}>Productos</NavLink>
            <NavLink to="/tips" className={s.navLink}>Tips</NavLink>
            <NavLink to="/contacto" className={s.navLink}>Contacto</NavLink>  
        </nav>
        <div className={s.footer__redes}>
            <a href="https://www.instagram.com/deltomate2021/" className={s.link}><BsInstagram/></a>
            <a href="http://wa.link/0435k6" className={s.link}><BsWhatsapp/></a>
        </div>     
        <div className={s.footer__Copyright}>
            <p>&copy; Todos los derechos reservados</p>
            <p>Developed by <Link to="https://tamarafrazzetta.netlify.app/" className={s.developer}>Tamara</Link></p>
        </div>
    </footer> 
  )
}
