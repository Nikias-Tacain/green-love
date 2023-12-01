'use client'
import React, { useEffect, useState } from 'react';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';
import FloatingWhatsAppButton from '@/app/components/FloatingWhatsAppButton';
import Header from '../components/Header';
import { db } from '@/app/firebase/config';
import Image from 'next/image';

const Product = () => {
  const [item, setItem] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const id = useParams().id;

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "productos", id);
        const resp = await getDoc(docRef);

        if (resp.exists()) {
          setItem({ ...resp.data(), id: resp.id });

          // Obtener productos relacionados (ejemplo: productos de la misma categoría)
          const productosRef = collection(db, "productos");
          const q = query(productosRef, where("categoria", "==", resp.data().categoria));
          const relatedProductsSnapshot = await getDocs(q);

          const filteredRelatedProducts = [];
          relatedProductsSnapshot.forEach((doc) => {
            if (doc.id !== id) {
              filteredRelatedProducts.push({ ...doc.data(), id: doc.id });
            }
          });

          // Filtrar para mostrar solo 5 o 6 productos
          const limitedRelatedProducts = filteredRelatedProducts.slice(0, 6);

          setRelatedProducts(limitedRelatedProducts);
        } else {
          console.error("Product not found.");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleButtonClick = (product) => {
    // Lógica para agregar al carrito
    console.log("Producto agregado al carrito:", product);
  };

  const renderProductDetails = () => (
    <div>
      <div className={styles.sectionProductInfo}>
        <div className={styles.imagesProductId}>
          <div>
            {item?.imagen.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image-${index}`}
                style={{ width: '100px', height: '100px', margin: '10px', cursor: 'pointer' }}
                onClick={() => handleImageClick(image)}
                loading='lazy'
              />
            ))}
          </div>
          {selectedImage ? (
            <img src={selectedImage} alt="Selected Image" loading='lazy' style={{ width: '100%', height: '100%' }} />
          ) : (
            <Image src={item.imagen[0]} alt={item?.nombre} height={700} width={700} priority/>
          )}
        </div>
        <div className={styles.intInfoProduct}>
          <Link href='/tienda'>
            <span className={styles.spanTienda}>TIENDA</span>
          </Link>
          <span> - </span>
          <span>{item?.nombre}</span>
          <h1>{item?.nombre}</h1>
          <h5>{item?.descripcion}</h5>
          <h3>$ {item?.precio}</h3>
          <div className={styles.botonCarrito}>
            <button type='button' onClick={() => handleButtonClick(item)} className={styles.buttonAgregarCarrito}>AGREGAR CARRITO 🛒</button>
          </div>
        </div>
      </div>
      <section>
        <h2>Quienes vieron este producto también compraron</h2>
        <div className={styles.relatedProducts}>
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className={styles.relatedProduct}>
              <Link href={`/tienda/${relatedProduct.id}`}>
                <Image
                  src={relatedProduct.imagen[0]}
                  alt={relatedProduct.nombre}
                  onClick={() => handleImageClick(relatedProduct.imagen)}
                  style={{ margin: '10px', cursor: 'pointer' }}
                  width={100}
                  height={100}
                />
              </Link>
              <h4>{relatedProduct.nombre}</h4>
              <div>
                <Image src="/star-solid.svg" alt="" width={20} height={20}/>
                <Image src="/star-solid.svg" alt="" width={20} height={20}/>
                <Image src="/star-solid.svg" alt="" width={20} height={20}/>
                <Image src="/star-solid.svg" alt="" width={20} height={20}/>
                <Image src="/star-half-stroke-regular.svg" alt="" width={20} height={20}/>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  return (
    <>
      <Header />
      {item && renderProductDetails()}
      <FloatingWhatsAppButton />
    </>
  );
};

export default Product;

