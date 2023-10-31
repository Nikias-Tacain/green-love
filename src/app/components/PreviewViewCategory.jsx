import React from 'react'
import styles from './PreviewViewCategory.module.css'
import PreviewViewCategoryProps from './PreviewViewCategoryProps'
import Link from 'next/link'

export const PreviewViewCategory = () => {
  return (
    <section>
      <div className={styles.textPreviewViewCategory}>
        <h2>CATEGORIAS</h2>
      </div>
      <article className={styles.previewViewCategory}>
        <Link href='/tienda/cactus'>
            <PreviewViewCategoryProps image='/cactus.png' categoryName='CACTUS' deletedComponent='quitComponentMobile1'/>
        </Link>
        <Link href='/tienda'>
            <PreviewViewCategoryProps image='/productos.png' categoryName='TODOS'/>
        </Link>
        <Link href='/tienda/suculentas'>
            <PreviewViewCategoryProps image='/suculentas.png' categoryName='SUCULENTAS' deletedComponent='quitComponentMobile2'/>
        </Link>
      </article>
    </section>
  )
}