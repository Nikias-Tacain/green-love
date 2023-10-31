import React from 'react'
import styles from './Header.module.css'
export default function Header() {
  return (
    <header className={styles.fondoHeader}>
      <div className={styles.marquee}>
        <span>OFERTAS EXCLUSIVAS !!!</span>
      </div>
      <img src="/imageFondo.png" alt="Portada GreenLove"/>
    </header>
  )
}
