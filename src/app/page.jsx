import styles from './page.module.css'
import Landing from './landing/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
    </main>
  )
}
