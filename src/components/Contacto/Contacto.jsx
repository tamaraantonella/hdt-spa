/* eslint-disable jsx-a11y/iframe-has-title */

import React from 'react'
import s from './Contacto.module.css'

export default function Contacto() {
  return (
    <div className={s.contactContainer}>
        <div className={s.titleContainer}>               
            <h2>Contactanos</h2>
        </div>
        <section className={s.contactSection}>
            <div className={s.contactData}>
                <div className={s.title}>
                    <p><a href="http://wa.link/0435k6">Escribinos al whatsapp <strong>aquí</strong></a></p>
                </div>
                <div className={s.horarios}>
                    <h3>Podes comunicarte en los siguientes horarios</h3>
                    <p>Atencion telefonica: LUN - VIE 9-18hs</p>
                    <p>Atención presencial en la huerta: MIE y SAB 9-12hs</p>
                </div>
            </div>
            <div className={s.ubicacion}>
                <h4>Ubicación</h4>
                <p>J. Mermoz norte 2433 Escobar</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.013067916215!2d-58.78764258541363!3d-34.32468658053274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb611ccefc9223%3A0x6b389041d6d7de9e!2sJuan%20Mermoz%20Nte.%202433%2C%20Bel%C3%A9n%20de%20Escobar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1647300534621!5m2!1ses!2sar" width="600" height="450"  allowfullscreen="" loading="lazy"/>
            </div>
            {/* <div class={s.contactForm}>
                <form class={s.form}>
                    <h2 className={s.formTitle}>Dejá tu mensaje</h2>
                    <input type="text" name="nombre" id="camponombre" placeholder="Nombre completo" required/>
                    <input type="tel" name="telefono" id="campotelefono" placeholder="Telefono" required/>
                    <input type="email" name="email" id="campoemail" placeholder="Escribe tu email" required/>
                    <textarea id="comentario" name="areatexto" rows="15" cols="30"></textarea>
                    <div class={s.buttons}>
                        <button type="submit" value="Enviar" className={s.submit}>Enviar</button>
                        <button type="reset" value="Reset" className={s.reset}>Reset</button>
                    </div>
                </form>     
            </div> */}
        </section>
    </div>
  )
}
