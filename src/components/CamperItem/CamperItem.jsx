import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCampers } from "../../redux/campers/selectors";
import { addToFavorite, deleteFromFavorite } from "../../redux/campers/slice";
import { Icon } from "../Icon/Icon";
import sprite from "../../assets/images/icons/sprite.svg";
import css from "./CamperItem.module.css";
import Button from "../Button/Button";

export default function CamperItem({ data, onShowMore }) {
  const {
    _id,
    gallery = [],
    name = "No name",
    price = "No price",
    rating = "No rating",
    location = "No location",
    description = "No description available",
    adults,
    transmission,
    engine,
    details = {},
    reviews = [],
  } = data;

  const [country, city] = location.split(", ");
  const formattedLocation = `${city}, ${country}`;
  console.log(formattedLocation);

  const dispatch = useDispatch();
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
            <p>&#8364;{price}.00</p>
            <div className={css.iconCont}>
              <svg width={24} height={24} onClick={handleFavoriteClick}>
                <use
                  className={`${css.iconHeart} ${
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
            <p>
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
          <ul className={css.featuresList}>
            <li className={css.feature}>
              <Icon width="20" height="20" id="icon-adults" />
              <p>{adults} adults</p>
            </li>
            <li className={css.feature}>
              <Icon width="20" height="20" id="icon-automatic" />
              <p className={css.text}>{transmission}</p>
            </li>
            <li className={css.feature}>
              <Icon width="20" height="20" id="icon-petrol" />
              <p className={css.text}>{engine}</p>
            </li>
            {details.kitchen && (
              <li className={css.feature}>
                <Icon width="20" height="20" id="icon-kitchen" />
                <p>Kitchen</p>
              </li>
            )}
            <li className={css.feature}>
              <Icon
                width="20"
                height="20"
                id="icon-beds"
                fill="none"
                stroke="#101828"
              />
              <p>{details.beds} beds</p>
            </li>
            {details.airConditioner && (
              <li className={css.feature}>
                <Icon width="20" height="20" id="icon-ac" />
                <p>AC</p>
              </li>
            )}
          </ul>
        </div>

        {/* <button className={css.button} onClick={onShowMore}>
          Show more
        </button> */}
        <Button> Show more</Button>
      </div>
    </div>
  );
}
