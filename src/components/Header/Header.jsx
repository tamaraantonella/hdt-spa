import {Link, NavLink} from 'react-router-dom'

import CartWidget from '../CartWidget/CartWidget'
import React from 'react'
import s from './Header.module.css'

export default function Header() {

  return (
    <div className={s.header}>
        <div className={s.header__logo}>
                <Link to="/"><img src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1662125764/delTomate/deltomate-logo_pxslmj.png" alt="logo"/></Link>     
        </div>    
        <nav className={s.header__nav}>
            <NavLink to="/" className={s.navLink}>Home</NavLink>
            <NavLink to="/nosotros" className={s.navLink}>Nosotros</NavLink>
            <NavLink to="/productos" className={s.navLink}>Productos</NavLink>
            <NavLink to="/tips" className={s.navLink}>Tips</NavLink>
            <NavLink to="/contacto" className={s.navLink}>Contacto</NavLink>  
            <NavLink to="/cart" className={s.navLink}><CartWidget/></NavLink>  
        </nav>
    </div>
  )
}
