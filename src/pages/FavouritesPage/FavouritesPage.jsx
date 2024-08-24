import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectFavoriteCampers } from "../../redux/campers/selectors";
import CamperList from "../../components/CamperList/CamperList";
import css from "./FavouritesPage.module.css";
import Button from "../../components/Button/Button";
import road from "../../assets/images/road.jpg";

export default function FavouritesPage() {
  const campers = useSelector(selectFavoriteCampers);
  const navigate = useNavigate();

  return (
    <div className={css.container}>
      {campers.length > 0 ? (
        <CamperList campers={campers} />
      ) : (
        <div>
          <img src={road} alt="road" className={css.containerImg} />
          <h2 className={css.containerTitle}>
            The open road is calling, but your favorites list needs a boost!
          </h2>
          <Button
            className={css.containerButton}
            onClick={() => {
              navigate("/catalog");
            }}
          >
            Find Your Wheels
          </Button>
        </div>
      )}
    </div>
  );
}
