import css from "./Review.module.css";
import { Icon } from "../Icon/Icon";

export default function Review({ review }) {
  return (
    <div className={css.reviewCard}>
      <div className={css.reviewUserInfo}>
        <div className={css.avatar}>{review.reviewer_name.charAt(0)}</div>
        <div className={css.reviewContent}>
          <div className={css.reviewHeader}>
            <h3 className={css.name}>{review.reviewer_name}</h3>
            <div className={css.rating}>
              {[...Array(5)].map((_, index) => {
                return index < review.reviewer_rating ? (
                  <Icon
                    key={index}
                    id="icon-rating"
                    width="16"
                    height="16"
                    fill="#ffc531"
                    stroke="#ffc531"
                  ></Icon>
                ) : (
                  <Icon
                    key={index}
                    id="icon-rating"
                    width="16"
                    height="16"
                    fill="#f2f4f7"
                    stroke="#f2f4f7"
                  ></Icon>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p className={css.reviewText}>{review.comment}</p>
    </div>
  );
}
