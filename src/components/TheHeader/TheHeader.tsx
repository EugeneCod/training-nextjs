import Link from 'next/link'
import styles from './TheHeader.module.css'

const TheHeader = () => {
  return (
    <header className={styles.root}>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </header>
  )
}

export default TheHeader