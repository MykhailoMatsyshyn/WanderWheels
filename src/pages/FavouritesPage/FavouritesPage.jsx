import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectFavoriteCampers } from "../../redux/campers/selectors";
import CamperList from "../../components/CamperList/CamperList";
import css from "./FavouritesPage.module.css";

export default function FavouritesPage() {
  const campers = useSelector(selectFavoriteCampers);
  const navigate = useNavigate();

  return (
    <div className={css.container}>
      {campers.length > 0 ? (
        <CamperList campers={campers} />
      ) : (
        <div>
          <h2>
            The open road is calling, but your favorites list needs a boost!
          </h2>
          <button
            onClick={() => {
              navigate("/catalog");
            }}
          >
            Find Your Wheels
          </button>
        </div>
      )}
    </div>
  );
}
