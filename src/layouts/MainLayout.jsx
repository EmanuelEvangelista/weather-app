import Navbar from "../components/Navbar/Navbar.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Styles from "../layouts/MainLayout.module.css";

export default function MainLayout({ children }) {
  return (
    <div className={Styles.mainLayoutContainer}>
      <div className={Styles.topbar}>
        <Header />
        <Navbar />
      </div>
      <main className={Styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}
