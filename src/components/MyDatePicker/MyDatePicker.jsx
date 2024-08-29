import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CalendarIcon from "../CalendarIcon/CalendarIcon";
import dayjs from "dayjs";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "56px",
          borderRadius: "10px",
          outline: "none",
          border: "none",
          backgroundColor: "var(--color-white-light)",
          color: "var(--color-primary)",
          padding: "0 18px",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
        input: {
          padding: "18px 0",
          fontSize: "16px",
          lineHeight: "20px",
          "&::placeholder": {
            color: "var(--color-secondary)",
            opacity: 1,
          },
          "&:active::placeholder, &:focus::placeholder, &:hover::placeholder": {
            color: "var(--color-primary)",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: { height: "56px" },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          lineHeight: "20px",
          color: "var(--color-secondary)",
          transform: "translate(18px, 18px) scale(1)",
          "&.Mui-focused, &.MuiInputLabel-shrink": {
            display: "none",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          marginRight: "8px",
        },
        positionEnd: {
          marginRight: "0px",
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(228, 72, 72, 0.4)",
            color: "var(--color-white)",
          },
          "&.Mui-selected": {
            backgroundColor: "var(--color-accent)",
            color: "var(--color-white)",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "var(--color-accent)",
          },
          "&.Mui-selected:focus": {
            backgroundColor: "var(--color-accent)",
            color: "var(--color-white)",
          },
          "&.Mui-selected:active": {
            backgroundColor: "var(--color-accent)",
          },
        },
      },
    },
  },
});

export default function MyDatePicker({ value, onChange }) {
  const today = dayjs();

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value || null}
          onChange={(date) => onChange(date || null)}
          label="Booking date"
          slots={{
            openPickerIcon: CalendarIcon,
          }}
          minDate={today}
          shouldDisableMonth={(date) => date.isBefore(today, "month")}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
