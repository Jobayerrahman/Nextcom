import styles from '../app/styles/Home.module.css'
import Default from '../app/layouts/Default/Default'
import HomePage from '../app/templates/HomePage/HomePage'

export default function Home() {
  return (
    <Default>
      {/* <main className={`${styles.main} ${inter.className}`}>
        <h2>It will be HomePage For this Project</h2>
      </main> */}
      <HomePage/>
    </Default>
  )
}
