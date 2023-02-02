import React, { useState } from "react";
import MyAutoComplete from "./components/MyAutoComplete";
import MyDatePicker from "./components/MyDatePicker";
import MyButton from "./components/MyButton";
import Grid from "@mui/material/Grid";
import { filmsData } from "./utils/data";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import Swal from "sweetalert2";

const App = () => {
  const [errors, setErrors] = useState(null);
  const [errorsHelperText, setErrorsHelperText] = useState(null);
  const [movie, setMovie] = useState(null);
  const [date, setDate] = useState(null);

  const handleChangeMovie = (value) => {
    setMovie(value);
  };

  const handleChangeDate = (value) => {
    setDate(value);
  };

  const handleFocus = (name) => {
    setErrors((prevState) => ({
      ...prevState,
      [name]: false,
    }));
    setErrorsHelperText((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movie) {
      setErrors((prevState) => ({
        ...prevState,
        movie: true,
      }));
      setErrorsHelperText((prevState) => ({
        ...prevState,
        movie: "Movie is required",
      }));
    }

    if (!date) {
      setErrors((prevState) => ({
        ...prevState,
        date: true,
      }));
      setErrorsHelperText((prevState) => ({
        ...prevState,
        date: "Date is required",
      }));
    }

    if (!movie || !date) {
      return;
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Form has been submitted !!!",
      showConfirmButton: false,
      timer: 1500,
    });

    console.log("Submitted Data : ", movie, date);

    setTimeout(() => {
      setMovie(null);
      setDate(null);
    });
  };

  return (
    <Grid
      container
      sx={{
        marginTop: 15,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid item xl={3} lg={3} md={3} sm={3} xs={12} sx={{ padding: 2 }}>
        <form onSubmit={handleSubmit}>
          <Card>
            <CardContent sx={{ padding: 5 }}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h4" align="center" sx={{ padding: 3 }}>
                    Form
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <MyAutoComplete
                    name="movie"
                    label="Movie"
                    error={errors?.movie}
                    helperText={errorsHelperText?.movie}
                    value={movie}
                    data={filmsData}
                    handleChange={handleChangeMovie}
                    handleFocus={handleFocus}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MyDatePicker
                    name="date"
                    label="Date"
                    error={errors?.date}
                    helperText={errorsHelperText?.date}
                    value={date}
                    handleChange={handleChangeDate}
                    handleFocus={handleFocus}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={{ padding: 5 }}>
              <Grid item xs={12}>
                <MyButton
                  fullWidth={true}
                  label={"Submit"}
                  variant={"contained"}
                  type={"submit"}
                />
              </Grid>
            </CardActions>
          </Card>
        </form>
      </Grid>
    </Grid>
  );
};

export default App;