import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const MyAutoComplete = ({
  name,
  error,
  helperText,
  value,
  data,
  handleChange,
  handleFocus,
  label,
}) => {
  return (
    <Autocomplete
      value={value}
      onFocus={() => {
        handleFocus(name);
      }}
      onChange={(_, newValue) => {
        handleChange(newValue);
      }}
      disablePortal
      options={data}
      renderInput={(params) => (
        <TextField
          error={error}
          helperText={error ? helperText : null}
          {...params}
          label={label}
        />
      )}
    />
  );
};

export default MyAutoComplete;
