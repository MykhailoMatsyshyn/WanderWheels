import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCampers } from "../../redux/campers/selectors";
import { addToFavorite, deleteFromFavorite } from "../../redux/campers/slice";
import { Icon } from "../Icon/Icon";
import sprite from "../../assets/images/icons/sprite.svg";
import css from "./CamperItem.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import CamperModal from "../CamperModal/CamperModal";
import { formatLocation } from "../../utils/formatLocation";
import FeaturesList from "../FeaturesList/FeaturesList";

export default function CamperItem({ data }) {
  const {
    _id,
    gallery = [],
    name = "No name",
    price = "No price",
    rating = "No rating",
    location = "No location",
    description = "No description available",
    details = {},
    reviews = [],
  } = data;

  const formattedLocation = formatLocation(location);

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const favoriteCampers = useSelector(selectFavoriteCampers);

  const isFavorite = favoriteCampers.some((camper) => camper._id === _id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(deleteFromFavorite(_id));
    } else {
      dispatch(addToFavorite(data));
    }
  };

  return (
    <div className={css.cont}>
      <img src={gallery[0]} className={css.img} alt="camper" />
      <div className={css.content}>
        <div className={css.firstSec}>
          <p>{name}</p>
          <div className={css.favCont}>
            <p>€{price.toFixed(2).replace(".", ",")}</p>
            <div className={css.iconCont}>
              <svg width={24} height={24} onClick={handleFavoriteClick}>
                <use
                  className={`${css.heart} ${css.iconHeart} ${
                    isFavorite ? css.iconFavorite : ""
                  }`}
                  xlinkHref={`${sprite}#icon-heart`}
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={css.secondSec}>
          <div className={css.rating}>
            <Icon
              id="icon-rating"
              fill={"#ffc531"}
              width={"16"}
              height={"16"}
            />
            <p className={css.ratingText}>
              {rating}({reviews.length} Reviews)
            </p>
          </div>
          <div className={css.location}>
            <Icon
              id="icon-location"
              stroke={"#101828"}
              fill={"none"}
              width={"16"}
              height={"16"}
            />
            <p>{formattedLocation}</p>
          </div>
        </div>

        <p className={css.description}>{description}</p>

        <div className={css.featuresCont}>
          <FeaturesList camper={data} id="CamperItem" height={96} />
        </div>
        <Button onClick={handleShowMore} className={css.showMoreBtn}>
          Show more
        </Button>
      </div>
      {isModalOpen && <CamperModal camper={data} onClose={handleCloseModal} />}
    </div>
  );
}
