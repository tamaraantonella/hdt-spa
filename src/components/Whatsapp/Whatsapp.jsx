import {BsWhatsapp} from 'react-icons/bs'
import React from 'react'
import s from   './Whatsapp.module.css'

export default function Whatsapp() {
  return (
    <div className={s.wp}>
        <a href="http://wa.link/0435k6" className={s.link}><BsWhatsapp/></a>
    </div>
  )
}
