import React from "react";
import Button from "@mui/material/Button";

const MyButton = ({ label, fullWidth, variant, type }) => {
  return (
    <Button
    sx={{
      padding : 2,
      fontSize : 18,
      fontWeight : 600,
      textTransform : "capitalize",
      backgroundColor : "#3c52b2e0!important",
      '&:hover': {
        backgroundColor: '#3c52b2 !important'
      },      
    }}
      fullWidth={fullWidth || false}
      variant={variant || "contained"}
      type={type || "button"}
    >
      {label}
    </Button>
  );
};

export default MyButton;
