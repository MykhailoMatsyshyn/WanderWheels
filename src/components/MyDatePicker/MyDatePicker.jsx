import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./MyDatePicker.module.css";
import { useState } from "react";

export default function MyDatePicker() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className={css.datepickerWrapper}>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
        dateFormat="dd/MM/yyyy"
        placeholderText="Booking date"
        minDate={new Date()}
        showDisabledMonthNavigation
        className={css.datepickerInput}
        calendarClassName={css.customCalendar}
      />
    </div>
  );
}
