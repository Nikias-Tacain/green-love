import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className={styles.footer}>
        <section className={styles.footerSocialMedias}>
            <h4>Contactanos</h4>
            <div>
                <Link href='https://www.instagram.com/green_love_mat/'>
                    <Image src='/instagram.svg' width={50} height={50}/>
                </Link>
                <Link href='https://api.whatsapp.com/send?phone=2364358085'>
                    <Image src='/whatsapp.svg' width={50} height={50}/>
                </Link>
            </div>
            <article>
                <p>2364358085</p>
                <p>matomasone@hotmail.com</p>
                <p>Juan Narbondo 390 "2"</p>
            </article>
        </section>
        <section className={styles.footerDerechos}>
            <p>Copyright Green Love - 2023. Todos los derechos reservados ©</p>
        </section>
    </footer>
  )
}
