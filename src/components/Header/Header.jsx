import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className={`${css.header} ${isHomePage ? css.home : ""}`}>
      <div className={css.headerContent}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
