import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
        <li>
          <NavLink
            to="/"
            end
            onClick={toggleMenu}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/findcity"
            onClick={toggleMenu}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <FaSearch style={{ marginRight: "6px" }} />
            SEARCH CITY
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            onClick={toggleMenu}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            HELP
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            onClick={toggleMenu}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            LOGIN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
