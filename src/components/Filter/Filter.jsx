import { Form, Formik, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import Button from "../Button/Button";
import { EQUIPMENT, TYPE } from "../../constants";
import css from "./Filter.module.css";
import { Icon } from "../Icon/Icon";
// import sprite from "../../assets/images/icons/sprite.svg";

export default function Filter() {
  const [locationSelected, setLocationSelected] = useState(false);

  const handleLocationChange = () => {
    setLocationSelected(true);
  };

  const initialValues = {
    location: "",
    filters: {
      ac: false,
      automatic: false,
      kitchen: false,
      tv: false,
      wc: false,
    },
    vehicleType: {
      van: false,
      fully: false,
      alcove: false,
    },
  };

  const validationSchema = Yup.object({
    location: Yup.string().trim(),
    filters: Yup.object().shape({
      ac: Yup.boolean(),
      automatic: Yup.boolean(),
      kitchen: Yup.boolean(),
      tv: Yup.boolean(),
      wc: Yup.boolean(),
    }),
    vehicleType: Yup.object().shape({
      van: Yup.boolean(),
      fully: Yup.boolean(),
      alcove: Yup.boolean(),
    }),
  });

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
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
                {EQUIPMENT.map((filter) => (
                  <label
                    key={filter.name}
                    className={clsx(css.item, {
                      [css.checkedItem]: values.filters[filter.name],
                    })}
                  >
                    <Field
                      type="checkbox"
                      name={`filters.${filter.name}`}
                      className={css.hiddenCheckbox}
                    />
                    <span className={css.icon}>
                      <Icon id={`icon-${filter.name}`}></Icon>
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
                        [css.checkedItem]: values.vehicleType[filter.name],
                      })}
                    >
                      <Field
                        type="checkbox"
                        name={`vehicleType.${filter.name}`}
                        className={css.hiddenCheckbox}
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

            <Button>Search</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
