import {JSX} from "react";
import styles from './Main.module.css';

const Main = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>Header for main</h1>
      <p>
        Some text
      </p>
      <p>first paragraph</p><p>Second paragraph</p><p>Third paragraph</p>
    </main>

  )
}

export default Main;
