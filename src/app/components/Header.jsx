import React from 'react'
import styles from './Header.module.css'
import ExitHeader from './ExitHeader'
export default function Header() {
  return (
    <header className={styles.fondoHeader}>
        <nav>
            <section className={styles.navBarHeaderSection}>
                <article className={styles.navBarHeaderSectionArticleButtons}>
                    <button className={styles.buttonInteractive}>Conocenos</button>
                    <button className={styles.buttonInteractive}>Tienda</button>
                </article>
            </section>
        </nav>
        <div className={styles.buttonExitHeader}>
            <ExitHeader />
        </div>
    </header>
  )
}
