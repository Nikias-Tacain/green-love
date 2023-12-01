import React from 'react'
import styles from './CardsDriving.module.css'
import CardsDrivingProps from './CardsDrivingProps'

export const CardsDriving = () => {
  return (
    <section className={styles.containerSectionDriving}>
        <CardsDrivingProps image='/truck-solid.svg' text1='ENVIAMOS TU COMPRA' text2='Entregas a todo el país' deletedComponent='quitComponentMobile1'/>
        <CardsDrivingProps image='/credit-card-solid.svg' text1='PAGÁ COMO QUIERAS' text2='Tarjetas de crédito o efectivo'/>
        <CardsDrivingProps image='/lock-solid.svg' text1='COMPRÁ CON SEGURIDAD' text2='Tus datos siempre protegidos' deletedComponent='quitComponentMobile2'/>
    </section>
  )
}
