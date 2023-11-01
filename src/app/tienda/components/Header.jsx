import React from 'react'
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
  return (
    <header className={styles.headerTienda}>
        <Image src='/favicon.ico' width={150} height={140}/>
        <section className={styles.HeaderTiendaNavBarSection}>
            <ul className={styles.HeaderTiendaNavBarSectionList}>
                <Link href='/'>
                    <li>Inicio</li>
                </Link>
                <li>Categorias ↓</li>
                <Link href='/tienda/#footer'>
                    <li>Contacto</li>
                </Link>
            </ul>
        </section>
        <input
                  type="text"
                  placeholder="Buscar productos"
                  style={{
                    padding: '10px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '12px',
                    marginBottom: '10px',
                    width: '140px',
                  }}
                />
    </header>
  )
}
