import React from 'react'
import styles from './PreviewViewCategory.module.css'
import Image from 'next/image'
export default function ImageEnvios() {
  return (
    <div className={styles.imageEnvios}>
      <Image src='/fondoEnvios.png' width={1520} height={550}/>
    </div>
  )
}
