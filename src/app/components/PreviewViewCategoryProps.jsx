import React from 'react'
import styles from './PreviewViewCategory.module.css'
function PreviewViewCategoryProps(props) {
  return (
    <article className={`${styles.containerPreviewViewCategorySelector} ${styles[props.deletedComponent]}`}>
        <div>
            <img src={props.image} alt={props.categoryName} />
        </div>
        <div className={styles.containerPreviewViewCategorySelectorDiv}>
            <button>{props.categoryName}</button>
        </div>
    </article>
  )
}

export default PreviewViewCategoryProps