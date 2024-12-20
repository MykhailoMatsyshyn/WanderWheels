import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  selectCampers,
  selectFilters,
  selectError,
  selectLoading,
  selectCurrentPage,
  selectPerPage,
  selectMoreToLoad,
} from "../../redux/campers/selectors";
import {
  incrementPage,
  resetСampers,
  setFilters,
  setPage,
} from "../../redux/campers/slice";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CamperList.module.css";
import { fetchCampersPage } from "../../redux/campers/operations";
import Button from "../Button/Button";
import { ThreeDots } from "react-loader-spinner";

export default function CamperList({ campers: propsCampers }) {
  const dispatch = useDispatch();

  const campers = propsCampers || useSelector(selectCampers);
  const filters = useSelector(selectFilters);
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const moreToLoad = useSelector(selectMoreToLoad);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    if (!propsCampers) {
      dispatch(setFilters({}));
      dispatch(resetСampers());
      dispatch(fetchCampersPage({ page: 1, limit: perPage }));
      dispatch(setPage(2));
    }
  }, []);

  const handleLoadMore = () => {
    dispatch(fetchCampersPage({ page: currentPage, limit: perPage, filters }));
    dispatch(incrementPage());
  };

  return (
    <div className={css.comperListContainer}>
      {isError && <p className={css.error}>No campervans found</p>}
      {campers.length > 0 && (
        <>
          <ul className={css.comperItems}>
            {campers.map((camper) => (
              <li key={camper._id}>
                <CamperItem data={camper} />
              </li>
            ))}
          </ul>
        </>
      )}
      {!propsCampers && moreToLoad && !isLoading && (
        <Button
          background={false}
          onClick={handleLoadMore}
          className={css.loadMoreBtn}
        >
          Load More
        </Button>
      )}
      {isLoading && (
        <div className={css.loaderContainer}>
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#e44848"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </div>
  );
}
