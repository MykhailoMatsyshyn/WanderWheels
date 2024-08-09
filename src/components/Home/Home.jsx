import Button from "../Button/Button";
import { Link } from "react-router-dom";
import css from "./Home.module.css";

export default function Home() {
  return (
    <div className={css.homeContainer}>
      <div className={css.contentWrapper}>
        <div className={css.textSection}>
          <p className={css.descriptionText}>
            Discover the hidden gems of Ukraine while enjoying the {"\n"}comfort
            and
            <span className={css.highlightedText}> convenience</span>
            {"\n"}of a fully equipped camper
          </p>
          <Link to="/catalog" className={css.buttonLink}>
            <Button background>Let's Go!</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
