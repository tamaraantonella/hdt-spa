import React from 'react'
import s from './Tips.module.css'

export default function Tips() {
  return (
    <div className={s.container}>
        <article className={s.tipsArticle}>
            <h2 className={s.title}>Datos que pueden interesarte</h2>
            <div className={s.text}> 
                <p className={s.intro}>
                    ¿Sabías que si guardás cada verdura de la forma correcta, aumentará su periodo de conservación y frescura?
                </p>
                <p>
                    Lo más importante es que no se deben lavar las verduras antes de meterlas en la heladera, sino justo antes de consumirlas. Si se guardan las verduras húmedas, será más fácil que se echen a perder.
                </p>
            </div>
        </article>
        <div className={s.block}>        
            <div className={s.blockBox}>
                <p className={s.title}>Usamos todas las partes de las verduras
                </p>
                <div className={s.cardBox}>
                    <div className={s.card}>
                        <p><strong>Hojas del Brócoli</strong>  Estas hojas concentran nutrientes esenciales y tienen un alto contenido de betacarotenos, por lo que tiene un poder antioxidante que contribuye a la prevención de enfermedades.</p>
                    </div>
                    <div className={s.card}>
                        <p><strong>Hojas de zanahoria</strong> Son comestibles y ricas en minerales. Pero atención, ¡es muy importante que sean orgánicas! Podemos consumirlas crudas en ensalada o como condimento y cocidas en caldos o sopas.</p>
                    </div>
                    <div className={s.card}></div>
                    <div className={s.card}></div>
                </div>
            </div>
           
            <div className={s.blockBox}>
                <p className={s.title}>Cómo congelar verduras</p>
                <div className={s.cardBox}>
                    <div className={s.card}>
                        <p><strong>Lavarlas</strong> El primer paso es el lavado, eliminando rastros de suciedad sin dañar los vegetales.</p>
                    </div>
                    <div className={s.card}>
                        <p><strong>Escurrir y secar</strong> Es esencial que queden secas, la humedad forma cristales que terminan provocando la pérdida del aroma y sabor del alimento.</p>
                    </div>
                    <div className={s.card}>
                        <p><strong>Guardado y etiquetado</strong> Para guardar los vegetales debemos hacerlo en productos aptos para el freezer y en el mismo momento del guardado, etiquetamos, es muy importante para no olvidarnos de consumir antes de los 6 meses.</p>
                    </div>
                </div>
            </div>
           
            <div className={s.blockBox}>
                <p className={s.title}>Tratamiento a semillas antes de la siembra</p>
                <div className={s.cardBox}>
                    <div className={s.card}>
                        <p><strong>Seleccionarlas</strong> Lo primero que debemos hacer es elegir las semillas de los mejores ejemplares que tuvimos en nuestra huerta.</p>
                    </div>
                    <div className={s.card}>
                        <p><strong>Desinfectarlas</strong> Las alternativas naturales para este proceso son: ceniza, ajo, ortiga y agua caliente.</p>
                    </div>
                    <div className={s.card}></div>
                    <div className={s.card}></div>
                </div>
            </div>
           
            <div className={s.blockBox}>
                <p className={s.title}>Fertilizantes caseros</p>
                <div className={s.cardBox}>
                    <div className={s.card}>
                        <p><strong>Humus de lombriz</strong> Para esto debemos contar con lombrices californianas. Este fertilizante es uno de los mejores abonos para nuestra huerta.</p>
                    </div>
                    <div className={s.card}>
                        <p><strong>Té de banana</strong> Ideal para la época de floración, aporta el potasio que la planta necesita.</p>
                    </div>
                    <div className={s.card}>
                        <p><strong>Granos de café</strong> Actúa como fuente de nitrógeno para el suelo. Podemos agregar los granos en nuestro compost o espolvorear directamente sobre el suelo.</p>
                    </div>
                    <div className={s.card}></div>
                </div>
            </div>
        </div>
    </div>
  )
}
