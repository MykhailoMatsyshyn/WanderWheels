import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import css from "./BookingForm.module.css";
import Button from "../Button/Button";
import MyDatePicker from "../MyDatePicker/MyDatePicker";
import { Icon } from "../Icon/Icon";

const formInitialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    // date: yup.date().required("Booking date is required").nullable(),
    // comment: yup.string().optional(),
  })
  .required();

export default function BookingForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className={css.form}>
          <div className={css.titleContainer}>
            <h2 className={css.title}>Book your campervan now</h2>
            <p className={css.prompt}>
              Stay connected! We are always ready to help you.
            </p>
          </div>

          <div className={css.inputs}>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={css.input}
            />
            <ErrorMessage name="name" component="span" className={css.error} />

            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={css.input}
            />
            <ErrorMessage name="email" component="span" className={css.error} />

            {/* <div className={css.datepickerWrapperContainer}> */}
            <MyDatePicker
              name="date"
              onChange={(date) => setFieldValue("date", date)}
              placeholder="Select date"
            />
            {/* <Icon
                id="icon-calendar"
                fill="none"
                stroke="#101828"
                width="20"
                height="20"
                className={css.icon}
              />
            </div>
            <ErrorMessage name="date" component="span" className={css.error} /> */}

            <Field
              as="textarea"
              name="comment"
              placeholder="Comment"
              className={`${css.input} ${css.textarea}`}
            />
          </div>
          <Button type="submit">Send</Button>
        </Form>
      )}
    </Formik>
  );
}
