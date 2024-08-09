import { useRef, useEffect, useState } from "react";
import { Icon } from "../Icon/Icon";
import { formatLocation } from "../../utils/formatLocation";
// import FeaturesList from "../FeaturesList/FeaturesList";
import BookingForm from "../BookingForm/BookingForm";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import ReviewsList from "../ReviewsList/ReviewsList";
import clsx from "clsx";
import css from "./CamperModal.module.css";

export default function CamperModal({ camper, onClose }) {
  const [activeTab, setActiveTab] = useState("features");
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleDocumentKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.body.classList.add(`${css.modalOpen}`);

    document.addEventListener("keydown", handleDocumentKeyDown);
    return () => {
      document.body.classList.remove(`${css.modalOpen}`);
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.backdrop} onClick={handleClickOutside}>
      <div className={css.modal} ref={wrapperRef}>
        <div className={css.mainContainer}>
          <div className={css.top}>
            <h2 className={css.title}>{camper.name}</h2>
            <button className={css.btn} onClick={onClose}>
              <Icon id="icon-close" stroke="#101828" />
            </button>
          </div>
          <div className={css.details}>
            <div className={css.secondaryContainer}>
              <div className={css.ratingContainer}>
                <Icon id="icon-rating" fill="#ffc531" width="16" height="16" />
                <p
                  className={css.rating}
                >{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
              </div>
              <div className={css.ratingContainer}>
                <Icon
                  id="icon-location"
                  stroke="#101828"
                  fill="none"
                  width="16"
                  height="16"
                />
                <p>{formatLocation(camper.location)}</p>
              </div>
            </div>
            <h3 className={css.title}>{`$${camper.price},00`}</h3>
          </div>
        </div>
        <div className={css.scrollable}>
          <div className={css.imagesContainer}>
            {camper.gallery.map((img, index) => (
              <div className={css.imgContainer} key={`image-${index}`}>
                <img className={css.img} src={img} alt="camper" />
              </div>
            ))}
          </div>

          <p className={css.description}>{camper.description}</p>

          <div className={css.tabContainer}>
            <button
              className={`${css.btn} ${css.tabBtn} ${
                activeTab === "features" ? css.active : ""
              }`}
              onClick={() => setActiveTab("features")}
            >
              Features
            </button>
            <button
              className={`${css.btn} ${css.tabBtn} ${
                activeTab === "reviews" ? css.active : ""
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>

          <div className={css.separator}></div>

          {activeTab === "features" && (
            <div className={css.featuresContainer}>
              <div className={css.left}>
                <div className={css.features}>
                  {/* <FeaturesList camper={camper} /> */}
                </div>
                <VehicleDetails camper={camper} />
              </div>
              <BookingForm />
            </div>
          )}
          {activeTab === "reviews" && (
            <div className={css.featuresContainer}>
              <div className={css.left}>
                <div className={css.reviews}>
                  <ReviewsList reviews={camper.reviews} />
                </div>
              </div>
              <BookingForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
