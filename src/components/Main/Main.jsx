import { Route, Routes } from 'react-router-dom'

import Bolsones from '../Bolsones/Bolsones'
import Cart from '../Cart/Cart'
import Contacto from '../Contacto/Contacto'
import Home from '../Home/Home'
import Nosotros from '../Nosotros/Nosotros'
import ProductTypes from '../ProductTypes/ProductTypes'
import ProductsContainer from '../ProductsContainer/ProductsContainer'
import React from 'react'
import Tips from '../Tips/Tips'
import Whatsapp from '../Whatsapp/Whatsapp'
import s from   './Main.module.css'

export default function Main() {
  return (
    <div className={s.containerMain}>
        <Whatsapp></Whatsapp>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/nosotros" element={<Nosotros/>} />
            <Route path="/productos" element={<ProductTypes/>}  />
            <Route path="/tips" element={<Tips/>} />
            <Route path="/contacto" element={<Contacto/>}  />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/productos/:category" element={<ProductsContainer/>} />
            <Route path='/bolsones' element={<Bolsones/>} />
        </Routes>
        
    </div>
  )
}
