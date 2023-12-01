import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className={styles.footer} id='footer'>
        <section className={styles.footerSocialMedias}>
            <h4>Contactanos</h4>
            <div>
                <Link href='https://www.instagram.com/green_love_mat/'>
                    <Image src='/instagram.svg' width={50} height={50} loading="lazy" alt='Instagram'/>
                </Link>
                <Link href='https://api.whatsapp.com/send?phone=2364358085'>
                    <Image src='/whatsapp.svg' width={50} height={50} loading="lazy" alt='WhatsApp'/>
                </Link>
            </div>
            <article>
                <p><Image src="/phone-solid.svg" alt="" className={styles.imgFooter} width={23} height={23}/> 2364358085</p>
                <p><Image src="/envelope-solid.svg" alt="" className={styles.imgFooter} width={23} height={23}/> matomasone@hotmail.com</p>
                <p><Image src="/house-solid.svg" alt="" className={styles.imgFooter} width={23} height={23}/> Juan Narbondo 390 &apos;2&apos;</p>
            </article>
        </section>
        <section className={styles.footerDerechos}>
            <p>Copyright Green Love - 2023. Todos los derechos reservados ©</p>
        </section>
    </footer>
  )
}
