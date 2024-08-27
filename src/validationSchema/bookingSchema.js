import * as yup from "yup";

const bookingSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    date: yup.date().nullable().required("Booking date is required"),
  })
  .required();

export default bookingSchema;
