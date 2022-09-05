import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { getProducts } from '../../redux/actions/index'
import s from   './ProductTypes.module.css'
import {useDispatch} from 'react-redux'

export default function ProductTypes() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProducts())
    })
  return (
    <div className={s.productMain}>
        <div className={s.title}>
            <h2 className="aboutus--title">Nuestros Productos</h2>
        </div>
        <div className={s.options}>
            <Link to="/productos/semillas" className={`${s.boxP} ${s.semillas}`} >
                <div className={s.link}>
                    Semillas
                </div>
            </Link>
            
            <Link to="/productos/plantines" className={`${s.boxP} ${s.plantines}`}>
                <div className={s.link}>
                 Plantines
                </div>
            </Link>
            <Link  to="/bolsones" className={`${s.boxP} ${s.bolsones}`}>
                <div className={s.link}>
                    Bolsones
                </div>
            </Link>
            <Link to="/productos/conservas" className={`${s.boxP} ${s.conservas}`}>
                <div className={s.link}>
                Conservas y dulces artesanales
                </div>
            </Link>
        </div>
    </div>
  )
}
