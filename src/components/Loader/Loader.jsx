import { Link } from 'react-router-dom'
import React from 'react'
import loading from '../../assets/giphy.gif'
import s from './Loader.module.css'

export default function Loader() {
  return (
    <div className={s.loader} >
        <img src={loading} alt="loading" />
        <Link to="/productos" className={s.irAtras} ><button>Ir atrás</button></Link>
    </div>
  )
}
