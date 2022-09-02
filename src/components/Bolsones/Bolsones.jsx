import React from 'react'
import s from './Bolsones.module.css'

export default function Bolsones() {
  return (
    <div className={s.container}>
        <div className={s.titleCon}>
            
            <h2>Bolsones</h2>
        </div>
        <div className={s.boxCont}>
            <div className={s.imgCon}>
                <img src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1662158743/delTomate/bolllson_tywjl5.jpg" alt="" />
            </div>
            <div className={s.infoCon}>
                <p className={s.infoTitle}>Nuestros bolsones son de verduras de estación. </p> 
                <p className={s.infoExtra}>Varían de acuerdo a la cosecha.</p>
                <p className={s.infoExtra}>Actualmente (Septiembre 2022) trae verduras de la siguiente lista: </p>
                <ul className={s.list}>
                    <li>Acelga</li>
                    <li>Brócoli</li>
                    <li>Coliflor</li>
                    <li>Repollo blanco</li>
                    <li>Repollo colorado</li>
                    <li>Puerro</li>
                    <li>Cebolla de verdeo</li>
                    <li>Lechugas - variedades</li>
                </ul>
                <p className={s.infoExtra}>Tomamos pedidos de bolsones previamente para una mejor atención. </p>
                <p className={s.infoExtra}>Se retiran por la huerta los días miércoles y sábados</p>
                {/* <a href='https://wa.link/5moqrk' >Consultar por envíos a barrios cerrados zona: Escobar</a> */}
            </div> 
        </div>
        
        
        
    </div>
  )
}
