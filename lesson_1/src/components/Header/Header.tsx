import styles from './Header.module.css';

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <h2 className={styles.header__title}>My first HTML page</h2>
    </header>
  )
}

export default Header;
