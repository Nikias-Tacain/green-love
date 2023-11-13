'use client'
import Link from 'next/link';
import { getFirestore } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { getAllProducts } from './productsQuery';
import { initializeApp } from 'firebase/app';
import styles from './CardTienda.module.css';
const firebaseConfig = {
    apiKey: "AIzaSyBIHwQxutnyQvQJsNQqra-HRoXRDGYkS14",
    authDomain: "greenlove-7e544.firebaseapp.com",
    projectId: "greenlove-7e544",
    storageBucket: "greenlove-7e544.appspot.com",
    messagingSenderId: "992293239295",
    appId: "1:992293239295:web:ce86c852af6ba3cbd5cfca"
};
initializeApp(firebaseConfig);
const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const db= getFirestore();
        getAllProducts(db)
            .then((item) =>{
                setProducts(item)
            })
    },[])
    const renderProducts = () => (
        products.map(item => (
            <div className={styles.cardProduct}>
                <section key={item.id} className={styles.cardProductDiv}>
                    <div className={styles.divProductImg}>
                        <Link href={`/tienda/${item.id}`}>
                            <article className={styles.imgProduct}>
                                <img src={item.imagen} alt={item.nombre}/>
                            </article>
                        </Link>
                    </div>
                    <article className={styles.cardProductDivData}>
                        <div>
                            <div className={styles.divImage}>
                                <img src="/cart-plus-solid.svg" alt="" />
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
          
        ))
    )
    return(
       <>   
            <div className={styles.card}>
                {renderProducts()}
            </div>
        </>
    )
}

export default ProductList;