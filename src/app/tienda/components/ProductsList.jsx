'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import styles from './CardTienda.module.css';
import Image from 'next/image';
import { useSearch } from './SearchContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { searchTerm } = useSearch();

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
              <Image src="/cart-plus-solid.svg" alt="" height={100} width={100}/>
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
  const filteredProducts = products.filter((product) => product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div className={styles.card}>
      {filteredProducts.map(renderProduct)}
    </div>
  );
};

export default ProductList;
