import css from "./ReviewsList.module.css";
import Review from "../Review/Review.jsx";

export default function ReviewsList({ reviews }) {
  return (
    <div>
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map((review, index) => (
            <li key={index}>
              <Review review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReviews}>Reviews haven't been added yet</p>
      )}
    </div>
  );
}
