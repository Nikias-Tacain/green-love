import React from 'react'
import styles from './CardsDriving.module.css'
function CardsDrivingProps(props) {
  return (
    <article className={styles.containerSectionDrivingSelector}>
        <div className={`${styles.containerSectionDrivingSelectorDiv} ${styles[props.deletedComponent]}`}>
            <div>
                <img src={props.image} alt='' loading="lazy"/>
                <h2>{props.text1}</h2>
            </div>
            <span>{props.text2}</span>
        </div>
    </article>
  )
}

export default CardsDrivingProps