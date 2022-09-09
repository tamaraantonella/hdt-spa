import React, { useEffect, useState } from 'react'

import {TbShoppingCartPlus} from 'react-icons/tb'
import { addToCart } from '../../redux/actions'
import s from './Counter.module.css'
import { useDispatch } from 'react-redux'

export default function Counter({product}) {
    const [count, setCount] = useState(0)

    const dispatch = useDispatch()

  function onAdd(count) {
        dispatch(addToCart(product, count))
        setCount(0)
    }
    function add() {
        if (count>=0) {
            setCount(count + 1)
        }
    }
    function remove() {
        count > 1 && setCount(count - 1)
    }
    useEffect(()=>{
        setCount(0)
    },[])
    return (
        <div className={s.countContainer} >
            <div className={s.buttonContainer}>
                <button onClick={()=>remove()} className={s.buttonCount}>-</button>
                <p className={s.counter}>{count}</p>
                <button onClick={()=>add()} className={s.buttonCount}>+</button>
            </div>
            <button className={s.addChart} onClick={()=>onAdd(count)} ><TbShoppingCartPlus/></button>
        </div>
    )
}
