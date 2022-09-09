// import { CartContext } from '../../context/CartContext'

import React, { useEffect, useState } from 'react'
import { removeFromCart, resetCarrito } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

import {FaTrashAlt} from 'react-icons/fa'
import s from './Cart.module.css'

export default function Cart() {
  const [update, setUpdate] = useState('')
  let mensaje=''
  const carrito = useSelector(state=>state.carrito)
  const dispatch = useDispatch()
  function removeItem(id) {
    setUpdate('update carrito')
    dispatch(removeFromCart(id))
  }
  function textEnviar (){
    carrito.length > 0 && carrito.map(item=>{
      return mensaje = mensaje +item.count+ ' paq - ' + item.product.type + ' ' + item.product.name+  '%0A'
    })
    let url = `https://api.whatsapp.com/send?phone=5491170071205&text=Hola te escribo desde la página web, queria hacer el siguiente pedido de semillas: %0A`+mensaje
    window.open(url);
    dispatch(resetCarrito())
  }
  useEffect(()=>{
    setUpdate('new order')
    
  }, [update])
  return (
    <div className={s.container}>
      <h2 className={s.title}>Armá tu pedido de semillas </h2>
      <div className={s.imgBox}>
        <img src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1662741700/high-angle-of-woman-holding-seeds-for-planting-with-pot_yrgw2k.jpg" alt="" />
      </div>
      <p className={s.text}>Acá encontrarás el listado de semillas que seleccionaste, una vez que clickes en enviar pedido, continuaremos el pedido por whatsapp donde podrás consultar todo.</p>
      <div className={s.cont}>
      {carrito.length > 0 ? (
        carrito.map(item => {
            return ( <div key={item.product.id} className={s.pedidoContainer}>
              <p >{item.count} {item.count === 1 ? 'sobre' : 'sobres'}</p>
              <p className={s.pedidoName}>{item.product.name}</p>
              <button onClick={()=>removeItem(item.product.id)} className={s.button} ><FaTrashAlt/></button>
              </div>	)
        }) 
         )
      : (<p className={s.noText}>Tu pedido de semillas está vacío</p>)}
      {carrito.length > 0 && <button onClick={()=>textEnviar()} className={s.send}>Enviar pedido</button>}
      
      </div>
    </div>
  )
}
// <iframe src="https://giphy.com/embed/DYZQswf7r39Qx8JFee" width="480" height="252" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/new-nuevo-tiniki-DYZQswf7r39Qx8JFee">via GIPHY</a></p>