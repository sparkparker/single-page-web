import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";

const MyDatePicker = ({
  name,
  error,
  helperText,
  value,
  handleChange,
  handleFocus,
  label
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={label}
        inputFormat="YYYY-MM-DD"
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            onFocus={() => {
              handleFocus(name);
            }}
            error={error}
            helperText={error ? helperText : null}
            fullWidth
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default MyDatePicker;
