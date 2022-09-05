import {BsWhatsapp} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import React from 'react'
import s from   './Whatsapp.module.css'

export default function Whatsapp() {
  return (
    <div className={s.wp}>
        <a href="http://wa.link/0435k6" className={s.link}><BsWhatsapp/></a>
    </div>
  )
}
