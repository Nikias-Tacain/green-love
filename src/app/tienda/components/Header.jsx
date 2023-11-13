'use client'
import React from 'react'
import { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
export default function Header() {
  const [mostrarCategorias, setMostrarCategorias] = useState(false);

    const toggleCategorias = () => {
        setMostrarCategorias(!mostrarCategorias);
    };
  return (
    <header>
          <section className={styles.headerTienda}>
        <section className={styles.headerTiendaImg}>
          <Link href='/'>
            <img src="/favicon.ico" alt="logoTienda" />
          </Link>
        </section>
        <section className={styles.HeaderTiendaNavBarSection}>
            <ul className={styles.HeaderTiendaNavBarSectionList}>
                <Link href='/'>
                    <li>Inicio</li>
                </Link>
                <li onClick={toggleCategorias}>Categorias ↓</li>
                <Link href='#footer'>
                    <li>Contacto</li>
                </Link>
            </ul>
            
        </section>
        <input
          type="text"
          placeholder="🔍 Buscar productos"
          className={styles.inputSearch}
        />
        <img src="/bars-solid.svg" alt="" className={styles.barList}/>
    </section>
    {mostrarCategorias && (
      <div className={styles.categoriasDeslizantes}>
          <div>
            <p>Categoría 1</p>
            <p>Categoría 2</p>
            <p>Categoría 3</p>
          </div>
      </div>
  )}
    </header>

  )
}
