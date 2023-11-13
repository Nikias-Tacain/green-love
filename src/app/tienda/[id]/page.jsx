'use client'
import {React, useEffect, useState } from 'react';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { useParams } from 'next/navigation'
import { getProductById } from '../components/productsQuery';
import Link from 'next/link';
import styles from './page.module.css';
import FloatingWhatsAppButton from '@/app/components/FloatingWhatsAppButton';
import Header from '../components/Header';
const Product = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBIHwQxutnyQvQJsNQqra-HRoXRDGYkS14",
    authDomain: "greenlove-7e544.firebaseapp.com",
    projectId: "greenlove-7e544",
    storageBucket: "greenlove-7e544.appspot.com",
    messagingSenderId: "992293239295",
    appId: "1:992293239295:web:ce86c852af6ba3cbd5cfca"
  };
  initializeApp(firebaseConfig);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    const db = getFirestore();
    getProductById(db, id)
      .then((item) =>{
        setProduct(item)
      })
  }, [id])
  
  const renderProducts = () => (
    <div>
      <div className={styles.sectionProductInfo}>
        <div className={styles.imagesProductId}>
          <div>
          {product?.imagen.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image-${index}`}
              style={{ width: '100px', height: '100px', margin: '10px', cursor: 'pointer' }}
              onClick={() => handleImageClick(image)}
            />
          ))}
          </div>
          {selectedImage ? (
            <img src={selectedImage} alt="Selected Image" style={{ width: '100%', height: '100%' }} />
          ) : (
            <img src={product?.imagen} alt="" />
          )}
        </div>
        <div className={styles.intInfoProduct}>
          <Link href='/tienda'>
            <span>TIENDA</span>
            <span> - </span>
          </Link>
          <span>{product?.nombre}</span>
          <h1>{product?.nombre}</h1>
          <h5>{product?.descripcion}</h5>
          <p>$ {product?.precio}</p>
          <div className={styles.botonCarrito}>
            <p onClick={() => handleButtonClick(product)}>agregar al carrito</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Quienes vieron este producto tambien compraron</h2>
      </div>
    </div>
    
  )
  return(
    <>
      <Header />
      {renderProducts()}
      <FloatingWhatsAppButton />
    </>
)
}
export default Product;