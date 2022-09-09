// import { useContext, useEffect, useState } from 'react'

// import {CartContext} from '../../context/CartContext'

import React, { useEffect, useState } from 'react'

import {FaSeedling} from 'react-icons/fa'
import s from './CartWidget.module.css'
import { useSelector } from 'react-redux'

export default function CartWidget() {
    const carritoLength = useSelector(state=>state.carritoLength)
    const [update,setUpdate]=useState('')
useEffect(()=>{
    setUpdate('update')
}, [carritoLength, update])
  return (
    <div className={s.container}>
        <FaSeedling/>
        {carritoLength}
        
    </div>
  )
}
