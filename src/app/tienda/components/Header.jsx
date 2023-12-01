'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { useSearch } from './SearchContext';

export default function Header() {
  const [mostrarCategorias, setMostrarCategorias] = useState(false);
  const [textoBotonCategorias, setTextoBotonCategorias] = useState('Mostrar Categorías');
  const { searchTerm, handleSearch } = useSearch();

  const toggleCategorias = () => {
    setMostrarCategorias(!mostrarCategorias);
    const nuevoTexto = mostrarCategorias ? 'Categorias ↓' : 'Ocultar Categorias ↑';
    setTextoBotonCategorias(nuevoTexto);
  };

  const toggleCategoriasMobile = () => {
    setMostrarCategorias(!mostrarCategorias);
    const nuevoTexto = mostrarCategorias ? 'Categorias ↓' : 'Ocultar Categorias ↑';
    setTextoBotonCategorias(nuevoTexto);
  };

  const renderCategoriaLinks = (categorias) => {
    return categorias.map((categoria) => (
      <Link key={categoria.path} href={`/tienda/${categoria.path}`}>
        <p className={styles.labelCategorias}>{categoria.label}</p>
      </Link>
    ));
  };

  const categoriasSecciones = [
    [{ label: 'TODOS', path: '#'},{ label: 'CACTUS', path: 'cactus' }, { label: 'FLORES PRESERVADAS', path: 'floresPreservadas' }, { label: 'VELAS', path: 'velas' }],
    [{ label: 'MACETAS', path: 'macetas' }, { label: 'TERRARIOS', path: 'terrarios' }, { label: 'GIFTBOX', path: 'giftBox' }, { label: 'DETALLES UNICOS', path: 'detallesUnicos' }],
  ];

  return (
    <header>
      <section className={styles.headerTienda}>
        <section className={styles.headerTiendaImg}>
          <Link href='/'>
            <Image src="/favicon.ico" alt="logoTienda" width={500} height={500}/>
          </Link>
        </section>
        <section className={styles.HeaderTiendaNavBarSection}>
          <ul className={styles.HeaderTiendaNavBarSectionList}>
            <Link href='/'>
              <li>Inicio</li>
            </Link>
            <li onClick={toggleCategorias}>{textoBotonCategorias}</li>
            <Link href='#footer'>
              <li>Contacto</li>
            </Link>
          </ul>
        </section>
        <Link href={'/tienda'}>
          <input type="text" placeholder="🔍 Buscar productos" className={styles.inputSearch} value={searchTerm} onChange={(e) => handleSearch(e.target.value)} />
        </Link>
        <Image src="/bars-solid.svg" onClick={toggleCategoriasMobile} alt="" className={styles.barList} width={100} height={100} />
      </section>
      {mostrarCategorias && (
        <section>
          {categoriasSecciones.map((seccion, index) => (
            <div key={index} className={styles.categoriasDeslizantes}>
              <div>{renderCategoriaLinks(seccion)}</div>
            </div>
          ))}
        </section>
      )}
    </header>
  );
}

