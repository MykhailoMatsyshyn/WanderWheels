import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import css from "./BookingForm.module.css";
import Button from "../Button/Button";
import MyDatePicker from "../MyDatePicker/MyDatePicker";
import dayjs from "dayjs";
import toast from "react-hot-toast";

const formInitialValues = {
  name: "",
  email: "",
  date: null,
  comment: "",
};

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    date: yup.date().nullable().required("Booking date is required"),
  })
  .required();

export default function BookingForm() {
  const handleSubmit = (values, actions) => {
    const formattedDate = dayjs(values.date).format("YYYY-MM-DD");

    const updatedValues = {
      ...values,
      date: formattedDate,
    };

    console.log(updatedValues);

    toast.success(
      "Booking successful! 🎉\n Your campervan awaits for your upcoming trip.",
      {
        duration: 5000,
      }
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
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

            <MyDatePicker
              value={values.date}
              onChange={(date) => setFieldValue("date", date)}
            />
            <ErrorMessage name="date" component="span" className={css.error} />

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
