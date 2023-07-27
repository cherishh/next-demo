import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <Link href="/user">user</Link>
        <Link href="/product">product</Link>
        <Link href="/about">about</Link>
      </nav>
    </main>
  )
}
