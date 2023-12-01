import React from 'react'
import styles from './PreviewViewCategory.module.css'
import Image from 'next/image'
function PreviewViewCategoryProps(props) {
  return (
    <article className={`${styles.containerPreviewViewCategorySelector} ${styles[props.deletedComponent]}`}>
        <div>
            <Image src={props.image} alt={props.categoryName} width={500} height={100} priority/>
        </div>
        <div className={styles.containerPreviewViewCategorySelectorDiv}>
            <button>{props.categoryName}</button>
        </div>
    </article>
  )
}

export default PreviewViewCategoryProps