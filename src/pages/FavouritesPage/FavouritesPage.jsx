import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectFavoriteCampers } from "../../redux/campers/selectors";
import { setError } from "../../redux/campers/slice";
import CamperList from "../../components/CamperList/CamperList";
import css from "./FavouritesPage.module.css";
import Button from "../../components/Button/Button";
import road from "../../assets/images/road.jpg";
import toast from "react-hot-toast";

export default function FavouritesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setError(false));

    const success = sessionStorage.getItem("formSubmitSuccess");
    if (success) {
      toast.success(
        "Booking successful! 🎉\n Your campervan awaits for your upcoming trip.",
        {
          duration: 5000,
        }
      );
      sessionStorage.removeItem("formSubmitSuccess");
    }
  }, []);

  const campers = useSelector(selectFavoriteCampers);
  const navigate = useNavigate();

  return (
    <div className={css.containerFav}>
      {campers.length > 0 ? (
        <CamperList campers={campers} />
      ) : (
        <div className={css.container}>
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
