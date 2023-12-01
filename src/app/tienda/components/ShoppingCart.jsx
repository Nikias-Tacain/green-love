'use client'
import React, { useState } from 'react';
import styles from './ShoppingCartModal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useCarrito } from './CarritoContext';
import Link from 'next/link';
const ShoppingCartModal = () => {
  const { carrito, clearCarrito, eliminarProductoDelCarrito, aumentarCantidad, disminuirCantidad } = useCarrito();
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  let totalPrecio = carrito.reduce((acumulador, producto) => {
    return acumulador + (producto.precio * producto.cantidad);
  }, 0);

  return (
    <div className={carrito.length > 0 ? styles.floatingCart : styles.hidden}>
      <button className={styles.openButton} onClick={toggleModal}>carrito {carrito.length} ↑</button>
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3>Carrito de Compras</h3>
              <div className={styles.carritoInt}>
              {carrito.map((student) =>(
                <div key={student.id} className={styles.carritoIntProduct}>
                  <img src={student.imagen} alt={student.nombre} />
                  <div className={styles.carritoIntSection}>
                    <h2>{student.nombre}</h2>
                    <p>$ {student.precio}</p>
                    <div className={styles.sectionControlls}>
                      <span onClick={() => disminuirCantidad(student)}>-</span>
                      <p>{student.cantidad}</p>
                      <span onClick={() => aumentarCantidad(student)}>+</span>
                    </div>
                  </div>
                  <div className={styles.contentButtons}>
                    <span onClick={() => eliminarProductoDelCarrito(student)}><FontAwesomeIcon icon={faTrashCan} /></span>
                  </div>
                </div>
              ))}
              <div className={styles.carritoIntTotal}>
                <p>Total: $ {totalPrecio}</p>
              </div>
              </div>
            <div className={styles.buttons}>
              <button className={styles.buttonBorrarCarrito} onClick={clearCarrito}><FontAwesomeIcon icon={faTrashCan} /></button>
              <button className={styles.closeButton} onClick={toggleModal}>Cerrar</button>
              <Link href='/tienda/order'>
                <button className={styles.buyButton}>Confirmar</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartModal;
