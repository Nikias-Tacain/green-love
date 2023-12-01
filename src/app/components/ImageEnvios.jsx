import React from 'react'
import styles from './PreviewViewCategory.module.css'
import Image from 'next/image'
export default function ImageEnvios() {
  return (
    <div className={styles.imageEnvios}>
      <Image src="/fondoEnvios.png" alt="Imagen Envios" width={900} height={100}/>
    </div>
  )
}
