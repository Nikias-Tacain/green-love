import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
export default function Header() {
  return (
    <header className={styles.fondoHeader}>
      <div className={styles.marquee}>
        <span>OFERTAS EXCLUSIVAS !!!</span>
      </div>
      <Image src="/imageFondo.png" alt="Portada GreenLove" width={1500} height={760}/>
    </header>
  )
}
