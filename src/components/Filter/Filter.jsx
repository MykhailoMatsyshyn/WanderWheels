import { Form, Formik, Field } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import Button from "../Button/Button";
import { FILTER_EQUIPMENT, TYPE } from "../../constants";
import css from "./Filter.module.css";
import { Icon } from "../Icon/Icon";

import normalizeLocation from "../../utils/normalizeLocation";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, setPage, resetPage } from "../../redux/campers/slice";
import { fetchCampersPage } from "../../redux/campers/operations";
import {
  selectCurrentPage,
  selectPerPage,
  selectFilters,
} from "../../redux/campers/selectors";

/**************************************/

const initialValues = {
  location: "",
  equipment: {
    airConditioner: false,
    automatic: false,
    kitchen: false,
    TV: false,
    shower: false,
  },
  vehicleType: "",
};

/**************************************/

export default function Filter() {
  const dispatch = useDispatch();

  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const filters = useSelector(selectFilters);

  // console.log(
  //   "= currentPage",
  //   currentPage,
  //   "= perPage",
  //   perPage,
  //   "= filters",
  //   filters
  // );
  /**************************************/
  const [locationSelected, setLocationSelected] = useState(false);

  const handleLocationChange = () => {
    setLocationSelected(true);
  };
  /**************************************/

  const handleSubmit = (values) => {
    console.log("values => ", values);

    const formattedLocation = normalizeLocation(values.location);

    const updatedValues = {
      ...values,
      location: formattedLocation,
    };

    console.log("updatedValues =>", updatedValues);

    dispatch(resetPage());
    dispatch(setFilters(updatedValues));
  };

  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      dispatch(
        fetchCampersPage({ page: currentPage, limit: perPage, filters })
      );
    }
  }, [dispatch, currentPage, perPage, filters]);

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <div>
              <label htmlFor="location" className={css.label}>
                Location
              </label>
              <div className={css.locationCont}>
                <div className={css.locationIcon}>
                  {locationSelected ? (
                    <Icon
                      id="icon-location"
                      stroke={"#101828"}
                      fill={"none"}
                      width={"16"}
                      height={"16"}
                    />
                  ) : (
                    <Icon
                      id="icon-location"
                      stroke={"rgba(16, 24, 40, 0.6)"}
                      fill={"none"}
                      width={"16"}
                      height={"16"}
                    />
                  )}
                </div>
                <Field
                  id="location"
                  name="location"
                  type="text"
                  onFocus={handleLocationChange}
                  className={css.locationInput}
                  placeholder="City"
                />
              </div>
            </div>

            <div className={css.filtersCont}>
              <h2 className={css.filtersTitle}>Filters</h2>
              <h3>Vehicle equipment</h3>
              <hr className={css.hr} />
              <div className={css.equipmentList}>
                {FILTER_EQUIPMENT.map((filter) => (
                  <label
                    key={filter.name}
                    className={clsx(css.item, {
                      [css.checkedItem]: values.equipment[filter.name],
                    })}
                  >
                    <Field
                      type="checkbox"
                      name={`equipment.${filter.name}`}
                      value={filter.name}
                      className={css.hiddenCheckbox}
                    />
                    <span className={css.icon}>
                      <Icon {...filter.iconParams} />
                    </span>
                    {filter.label}
                  </label>
                ))}
              </div>

              <div className={css.filtersCont}>
                <h3>Vehicle type</h3>
                <hr className={css.hr} />
                <div className={css.typeList}>
                  {TYPE.map((filter) => (
                    <label
                      key={filter.name}
                      className={clsx(css.item, {
                        [css.checkedItem]: values.vehicleType === filter.name,
                      })}
                    >
                      <Field
                        type="radio"
                        name="vehicleType"
                        value={filter.name}
                        className={css.hiddenCheckbox}
                        onClick={() => {
                          if (values.vehicleType === filter.name) {
                            // Якщо той же самий варіант вибраний, скидаємо вибір
                            values.vehicleType = "";
                          }
                        }}
                      />
                      <span className={css.icon}>
                        <Icon id={`icon-${filter.name}`}></Icon>
                      </span>
                      {filter.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <Button className={css.searchBtn} type="submit">
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
