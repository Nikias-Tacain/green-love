'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import styles from './CardTienda.module.css';
import Image from 'next/image';
import { useSearch } from './SearchContext';
import { useCarrito } from './CarritoContext';
import ShoppingCartModal from './ShoppingCart';

const ProductList = () => {
  const { handleButtonClick } = useCarrito();
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const { searchTerm } = useSearch();


  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const filterAndSortProducts = (products) => {
    // Filtrar por nombre
    const filteredProducts = products.filter((product) =>
      product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Ordenar según la opción seleccionada
    switch (sortBy) {
      case 'alphabeticalAsc':
        return filteredProducts.sort((a, b) => a.nombre.localeCompare(b.nombre));
      case 'priceAsc':
        return filteredProducts.sort((a, b) => a.precio - b.precio);
      case 'priceDesc':
        return filteredProducts.sort((a, b) => b.precio - a.precio);
      default:
        return filteredProducts;
    }
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productosRef = collection(db, "productos");
        const resp = await getDocs(productosRef);
        const productData = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProducts(productData);        
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const renderProduct = (item) => (
    <div className={styles.cardProduct} key={item.id}>
      <section className={styles.cardProductDiv}>
        <div className={styles.divProductImg}>
          <Link href={`/tienda/${item.id}`}>
            <article className={styles.imgProduct}>
              <Image src={item.imagen[0]} alt={item.nombre} width={550} height={500} priority/>
            </article>
          </Link>
        </div>
        <article className={styles.cardProductDivData}>
          <div>
            <div className={styles.divImage}>
              <Image src="/cart-plus-solid.svg" alt="" height={100} width={100} onClick={() => handleButtonClick(item)}/>
            </div>
            <Link href={`/tienda/${item.id}`}>
              <article>
                <h2>{item.nombre}</h2>
                <p>$ {item.precio}</p>
              </article>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
  const filteredAndSortedProducts = filterAndSortProducts(products);
  return (
    <section>
      <ShoppingCartModal/>
      <div className={styles.filtrosPage}>
        <label htmlFor="sort">Ordenar por: </label>
        <select id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="">Seleccionar</option>
          <option value="alphabeticalAsc">Alfabéticamente A-Z</option>
          <option value="priceAsc">Precio (Menor a Mayor)</option>
          <option value="priceDesc">Precio (Mayor a Menor)</option>
        </select>
      </div>
      <div className={styles.card}>
        {filteredAndSortedProducts.map(renderProduct)}
      </div>
    </section>
  );
};

export default ProductList;
