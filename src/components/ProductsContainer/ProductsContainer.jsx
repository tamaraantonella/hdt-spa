import React, { useEffect, useState } from 'react'
import { filterProducts, getByCategory, resetCategory, sortProducts } from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'

import {AiOutlineClose} from 'react-icons/ai'
import Counter from '../Counter/Counter'
import Loader from '../Loader/Loader'
import {VscCheck} from 'react-icons/vsc'
import s from  './ProductsContainer.module.css'
import { useParams } from 'react-router-dom'

export default function ProductsContainer() {
    const {category} = useParams()
    const dispatch = useDispatch()
    const categoryProducts = useSelector(state => state.categoryProducts)
    const types= useSelector(state => state.types)
    //eslint-disable-next-line
    const [order, setOrder]=useState('')
    const [ordenar, setOrdenar]=useState('')
    
    useEffect(()=>{
        setTimeout(async () => {
            dispatch(getByCategory(category))
        }, 1000);
        
        return () => {
            dispatch(resetCategory())
        }
    }, [category, dispatch])

    function handleFilter(e){
        e.preventDefault()
        dispatch(filterProducts(e.target.value))
        setOrdenar('')
    }
    function handleSort (e){
        e.preventDefault()
        dispatch(sortProducts(e.target.value))
        setOrder(e.target.value)
        setOrdenar(e.target.name)
    }
 
  return (
    <div className={ s.titleContainer}>
        <div> 
            <h1 className={s.title}>{category}</h1>
        </div>
        <div className={s.selectCont}>
            <select className={s.select} onChange={e=>handleSort(e)} value={ordenar}>
                <option hidden>Ordenar</option>
                <option value="asc">Ordenar A-Z</option>
                <option value="desc">Ordenar Z-A</option>
            </select>
            <select  className={s.select} onChange={e=>handleFilter(e)}>
                <option hidden>Filtrar por tipo</option>
                <option value='all'>Todos</option>
                {types.length && types.map((e, i) => {
                    return <option key={i} value={e}>{e}</option>
                })}
            </select>
        </div>
        <div className={categoryProducts.length ? s.container : s.titleLoader}>
            {categoryProducts.length ? categoryProducts.map((product) => (
                <div key={product.id} className={product.stock? s.card : s.noCard}>
                    <img className={s.cardImg}src={product.img} alt={product.name} />
                    <div className={s.cardBody}>
                        <h1 className={s.cardTitle}>{product.name}</h1>
                        <p className={s.cardSubTitle}>Tipo: {product.type}</p>
                        <p className={s.cardInfo}>{product.description}</p>
                        <p className={product.stock? s.stock : s.noStock}>Stock: {product.stock ? <VscCheck/> : <AiOutlineClose/>}</p>
                        <div className={s.cart}>{product.category ==='semillas'&& product.stock && <Counter product={product}/>}</div>
                    </div>
                </div>
            )): 
            <Loader/>}
        </div>
    </div>
  )
}
