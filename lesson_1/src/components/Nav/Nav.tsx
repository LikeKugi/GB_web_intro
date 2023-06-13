import {JSX} from "react";
import {NavLink} from "react-router-dom";
import styles from './Nav.module.css'

const Nav = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.nav__link} to={'/'}>Main page</NavLink>
      <NavLink className={styles.nav__link} to={'/about'}>About</NavLink>
      <NavLink className={styles.nav__link} to={'/request'}>Request</NavLink>
    </nav>
  );
}
export default Nav;
