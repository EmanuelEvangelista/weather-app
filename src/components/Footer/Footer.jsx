import logo from '../../assets/icon/logo.png';
import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const Footer = () => (
  <footer className={styles.footer}>
    <img className={styles.logo} src={logo} alt="WeatherWise Logo" />
    <nav className={styles.nav}>
      <div className={styles.columContainer}>
        <h3 aria-label='Dorman Navigation'>Dormant Navigation</h3>
         <ul className={styles.navList}>
                 <li>
                   <NavLink to="/" end
                     className={({ isActive }) => (isActive ? styles.active : "")}>
                     WEATHER
                   </NavLink>
                 </li>
                 <li>
                   <NavLink to="/findcity"
                     className={({ isActive }) => (isActive ? styles.active : "")}>
                     <FaSearch style={{ marginRight: "6px" }} />
                     <span>ADD CITY</span>
                   </NavLink>
                 </li>
                 <li>
                   <NavLink to="/help"
                     className={({ isActive }) => (isActive ? styles.active : "")}>
                     HELP
                   </NavLink>
                 </li>
                 <li>
                   <NavLink to="/login"
                     className={({ isActive }) => (isActive ? styles.active : "")}>
                     LOGIN
                   </NavLink>
                 </li>
        </ul>
        </div>
        <div className={styles.columContainer}>
        <h3 aria-label="Contact Information">Contact</h3>
        <ul>
            <li><a href="#">Adress</a></li>
            <li><a href="#">Phone number</a></li>
            <li><a href="#">Email</a></li>
        </ul>
        </div>
        <div className={styles.columContainer}>
        <h3 aria-label="Social Media Links">Social Media Links</h3>
        <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">X</a></li>
        </ul>
        </div>
    </nav>
    <p>&copy; 2025 WeatherWise. All rights reserved.</p>
  </footer>
);

export default Footer;
