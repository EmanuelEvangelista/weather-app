import logo from '../../assets/icon/logo.png';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <a href="/" className={styles.logo}>
      <img className={styles.logoImage} src={logo} alt="WeatherWise Logo" />
    </a>
  </header>
);

export default Header;