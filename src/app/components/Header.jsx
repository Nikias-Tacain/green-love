import React from 'react'
import styles from './Header.module.css'
export default function Header() {
  return (
    <header className={styles.fondoHeader}>
        <div>
            <p>OFERTAS EXCLUSIVAS !!!</p>
        </div>
        <img src="/imageFondo.png" alt="Portada GreenLove"/>
    </header>
  )
}
