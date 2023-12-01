import React from 'react'
import styles from './CardsDriving.module.css'
import Image from 'next/image'
function CardsDrivingProps(props) {
  return (
    <article className={styles.containerSectionDrivingSelector}>
        <div className={`${styles.containerSectionDrivingSelectorDiv} ${styles[props.deletedComponent]}`}>
            <div>
                <Image src={props.image} alt='' width={100} height={70}/>
                <h2>{props.text1}</h2>
            </div>
            <span>{props.text2}</span>
        </div>
    </article>
  )
}

export default CardsDrivingProps