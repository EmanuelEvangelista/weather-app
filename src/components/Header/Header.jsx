import logo from '../../assets/icon/logo.png';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className={styles.header}>
    <NavLink to="/" end className={styles.logo}>
      <img className={styles.logoImage} src={logo} alt="WeatherWise Logo" />
    </NavLink>
  </header>
);

export default Header;