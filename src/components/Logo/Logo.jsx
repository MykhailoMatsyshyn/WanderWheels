import { Link } from "react-router-dom";
import logo from "../../../public/logo.svg";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to="/" className={css.logoLink}>
      <div className={css.position}>
        <img
          src={logo}
          alt="Wander Wheels Logo Icon"
          className={css.logoIcon}
          width="46"
          height="32"
        />
        <p>Wander Wheels</p>
      </div>
    </Link>
  );
}
