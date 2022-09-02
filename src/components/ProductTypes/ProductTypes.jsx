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
            <div className={`${s.boxP} ${s.semillas}`} >
                <div>
                <Link to="/productos/semillas" className={s.link}>Semillas</Link>
                </div>
            </div>
            <div className={`${s.boxP} ${s.plantines}`}>
                <div>
                <Link to="/productos/plantines" className={s.link}>Plantines</Link>
                </div>
            </div>
            <div className={`${s.boxP} ${s.bolsones}`}>
                <div>
                    <Link to="/bolsones" className={s.link}>Bolsones</Link>
                </div>
            </div>
            <div className={`${s.boxP} ${s.conservas}`}>
                <div>
                <Link to="/productos/conservas" className={s.link}>Conservas y dulces artesanales</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
