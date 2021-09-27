import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function SavedDest(props) {
  const { dest } = props;
  console.log(dest);
  const [readMore, setReadMore] = useState(false);
  const [readMoreAddress, setReadMoreAddress] = useState(false);
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Grid item md={6}>
        <Card sx={{ display: "flex" }}>
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
                  : `${dest.description.substring(0, 30)}...
        `}
                <span
                  variant="subtitle1"
                  style={{ cursor: "pointer", color: "#1976d2" }}
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? "show less" : "read more"}
                </span>
              </p>{" "}
              <Typography>
                <b>Address : </b>

                {readMoreAddress
                  ? dest.address + " " + dest.state
                  : `${dest.address.substring(0, 20)}...
        `}
                <span
                  variant="subtitle1"
                  style={{ cursor: "pointer", color: "#1976d2" }}
                  onClick={() => setReadMoreAddress(!readMoreAddress)}
                >
                  {readMoreAddress ? "show less" : "read more"}
                </span>
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

            <CardActions>
              <Button size="small">Not Interested</Button>
            </CardActions>
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
