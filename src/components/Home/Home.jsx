import {BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import React from 'react'
import s from './Home.module.css'

export default function Home() {
  const instagram = new URL('https://www.instagram.com/deltomate2021/')
  return (
    <div>
      <section className={s.main__banner} >
            <div className={s.main__bannerContainer}>
                <div className={s.boxText}>
                    <h1>huerta del tomate orgánica y agroecológica</h1>
                </div>
                <div >
                    <a href={instagram} className={s.main__bannerLink}><BsInstagram/></a>
                </div>
            </div>  
      </section>
      <div className={s.novedades}>
        <div className={s.gif}>
          <img src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1662743341/giphy_z0oh4j.gif" alt="" />
        </div>
          
          <p className={s.textnov}>Ahora podés seleccionar las semillas que te gustaría consultar, y armar un pedido que nos va a llegar por whatsapp.</p>
          <p className={s.textnov}>Luego por ese medio seguimos coordinando todo para que puedas tener las semillas de las variedades que quieras!</p>
          <p className={s.textnov}>Las semillas vienen en paquetes, 1 unidad es equivalente a 1 sobre de semillas. </p>
          <p className={s.sintesis}>Más simple, más rapido, más cómodo.</p>
          <p className={s.aclaracion}>Aclaración: el pedido es un estimativo, y se puede modificar. En el caso que nos hayamos quedado sin stock te lo avisaremos al solicitar el pedido, asimismo si querés agregar alguna variedad más podés aclararlo por ese mismo medio.</p>
      </div>
      <div className={s.main__bolsones} id="bolson">
        <h2>bolsones agroecológicos</h2>
        <div className={s.boxBolson}>
            <img src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1662129943/delTomate/bolson_qrgz0i.jpg" alt=""/>
            <div className={s.textBolson}>
              <p>Incluyen verduras de estación, van variando de acuerdo a la cosecha. Todas las semanas tomamos pedidos por whatsapp previamente para una mejor organización. Se retira en el campo, podes ver la ubicación <Link className={s.link} to="/contacto">acá</Link>.</p>
              {/* <a href='https://wa.link/5moqrk' className={s.attention}>Consultar por envíos a barrios cerrados zona: Escobar</a> */}
              <h4>¡No te olvides de traer caja o bolsa para tus verduras!</h4>
            </div>
      </div>
        </div> 
        <div className={s.boxes__container} >
                <div className={s.box} >
                    <h3>Visitanos</h3>
                    <p>Podes encontrar nuestra huerta en la ciudad de Belén de Escobar, Partido de Escobar, Buenos Aires.  J. Mermoz norte 2433</p>
                </div>
                <div className={s.box} >
                    <h3>Proyectos</h3>
                    <p>Unimos trabajo con profesionales del INTA, trabajos en común con cooperativas de la zona y con pymes de cosmética natural.</p>
                </div>
                <div className={s.box}>
                    <h3>Saludable y ecofriendly</h3>
                    <p>Impacto positivo, orgánico, agroecológico...así es nuestro proyecto. Nos es importante destacar que todos nuestros alimentos son libres de agroquímicos, brindando así alimentos saludables y de calidad.</p>
                </div>
        </div>
    </div>
  )
}
