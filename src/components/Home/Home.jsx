import Button from "../Button/Button";
import { Link } from "react-router-dom";
import css from "./Home.module.css";

export default function Home() {
  return (
    <div className={css.home}>
      <div className={css.home2}>
        <div className={css.home3}>
          <p className={css.home4}>
            Discover the hidden gems of Ukraine while enjoying the {"\n"}comfort
            and
            <span className={css.highlight}> convenience</span>
            {"\n"}of a fully equipped camper
          </p>
          <Link to="/catalog" className={css.buttonLink}>
            <Button background>Book Now!</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
