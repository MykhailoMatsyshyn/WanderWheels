import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  selectCampers,
  selectError,
  selectLoading,
  selectCurrentPage,
  selectPerPage,
  selectMoreToLoad,
} from "../../redux/campers/selectors";
import { incrementPage, setPage } from "../../redux/campers/slice";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CardList.module.css";
import { fetchCampersPage } from "../../redux/campers/operations";
import Button from "../Button/Button";

export default function CardList() {
  const dispatch = useDispatch();

  // const [visibleCampers, setVisibleCampers] = useState(4);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const campers = useSelector(selectCampers);
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const moreToLoad = useSelector(selectMoreToLoad);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampersPage({ page: 1, limit: perPage }));
    dispatch(setPage(2));
  }, []);

  const handleLoadMore = () => {
    dispatch(fetchCampersPage({ page: currentPage, limit: perPage }));
    dispatch(incrementPage());
  };

  return (
    <div>
      <ul>
        {campers.map((camper) => (
          <li key={camper._id}>
            <CamperItem data={camper} />
          </li>
        ))}
      </ul>
      {moreToLoad && !isLoading && (
        <Button background={false} onClick={handleLoadMore}>
          Load More
        </Button>
      )}
    </div>
  );
}
