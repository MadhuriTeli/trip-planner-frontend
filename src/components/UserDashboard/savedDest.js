import React, { useState, useEffect } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

function SavedDest(props) {
  const { dest } = props;
  console.log(dest);
  const [readMore, setReadMore] = useState(true);
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Grid item md={6}>
        <Card style={{ marginBottom: "20px" }} sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {dest.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {dest.city}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              <p>
                {readMore
                  ? dest.description
                  : `${dest.description.substring(0, 40)}...
        `}
                <Typography
                  variant="subtitle1"
                  color="primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? "show less" : "read more"}
                </Typography>
              </p>{" "}
              <Typography>
                <b>Address : </b>
                {dest.address}
              </Typography>
              <Typography>
                <b>Visiting Hours: </b>
                {dest.visiting_hours}
              </Typography>
              <Typography>
                <b>Visiting Fee : </b>
                {dest.visiting_fee}
              </Typography>
            </Typography>

            <button
              className="delete-btn"
              //   onClick={() => removeTour(id)}
            >
              Not Interested
            </button>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 160,
              display: { xs: "none", sm: "block" },
            }}
            image={dest.image}
            alt={dest.title}
          />
        </Card>{" "}
      </Grid>
    </ThemeProvider>
  );
}

export default SavedDest;
