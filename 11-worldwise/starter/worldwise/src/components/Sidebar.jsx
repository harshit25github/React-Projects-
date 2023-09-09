import { Outlet } from "react-router-dom";
import AppNav from "./AppNav.jsx";
import Footer from "./Footer.jsx";
import Logo from "./Logo.jsx";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}
