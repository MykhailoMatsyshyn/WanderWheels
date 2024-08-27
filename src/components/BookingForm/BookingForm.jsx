import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./BookingForm.module.css";
import Button from "../Button/Button";
import MyDatePicker from "../MyDatePicker/MyDatePicker";
import dayjs from "dayjs";
import bookingSchema from "./../../validationSchema/bookingSchema";

const formInitialValues = {
  name: "",
  email: "",
  date: null,
  comment: "",
};

export default function BookingForm() {
  const handleSubmit = (values, actions) => {
    const formattedDate = dayjs(values.date).format("YYYY-MM-DD");

    const updatedValues = {
      ...values,
      date: formattedDate,
    };

    sessionStorage.setItem("formSubmitSuccess", "true");

    actions.resetForm();

    window.location.reload();
  };

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={bookingSchema}
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
            <div className={css.inputWrapper}>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className={css.input}
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.inputWrapper}>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.inputWrapper}>
              <MyDatePicker
                value={values.date}
                onChange={(date) => setFieldValue("date", date)}
              />
              <ErrorMessage
                name="date"
                component="span"
                className={css.error}
              />
            </div>

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
