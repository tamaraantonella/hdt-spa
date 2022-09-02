import React from 'react'
import s from './Nosotros.module.css'

export default function Nosotros() {
    const IMG = 'https://res.cloudinary.com/dfbxjt69z/image/upload/v1662134685/delTomate/WhatsApp_Image_2022-09-02_at_12.29.38_dzq7p3.jpg'
    const IMG2 = 'https://res.cloudinary.com/dfbxjt69z/image/upload/v1662132500/delTomate/about3_k32w8a.jpg'
    const IMG3 = 'https://res.cloudinary.com/dfbxjt69z/image/upload/v1662132499/delTomate/about2_yefkhz.jpg'
  return (
    <div className={s.container}>
        <div className={s.aboutContainer}>               
            <h2 className={s.title}>Ecológicos y amigables con el medioambiente</h2>
            <p>La huerta surge en 2021 de la idea de Norma y Maby, dos amigas dedicadas a la huerta agroecológica exotica. 
            Todo surgio cuando cada una de las amigas tenia su propia huerta,intercambiaban semillas y experiencias. Con el tiempo decidieron unir esfuerzos y cultivar conjuntamente distintas verduras exóticas con producción de semillas, dando origen a Huerta Del Tomate. 
             La misión principal del proyecto es concientizar sobre los pesticidas e incentivar a todos con huertas propias.
            Hoy en día en la huerta se lleva a cabo producción de plantines, producción de semillas, venta de verduras de estación.</p>
            <p>Eliseo trabaja junto a nosotras, preparándonos la tierra y cultivando de manera agroecologica las verduras tradicionales que integran el bolsón. Dedicandonos nosotras a todas las verduras exóticas y a recuperar el sabor del tomate reliquia y de las distintas variedades de ajíes y otras verduras exóticas</p>
        </div>
        <div className={s.nosotros}> 
            <div className={s.box}>
                <img src={IMG3} alt="" />
                <div>
                    <p>Maby</p>
                </div>
            </div>
            <div className={s.box}>
                <img src={IMG2} alt="" />
                <div>
                    <p>Norma</p>
                </div>
            </div>
            <div className={s.box}>
                <img src={IMG} alt="" />
                <div>
                    <p>Maby, Eliseo & Norma</p>
                </div>
            </div>
        </div>
    </div>
  )
}
