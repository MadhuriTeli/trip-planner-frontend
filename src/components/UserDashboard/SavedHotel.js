import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function SavedHotel(props) {
  const { hotel } = props;
  console.log(hotel);
  const [readMore, setReadMore] = useState(false);
  const [readMoreAddress, setReadMoreAddress] = useState(false);
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3}>
        <Grid item>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {" "}
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {`${
                  hotel.title.length > 10
                    ? hotel.title.substring(0, 15) + "..."
                    : hotel.title
                }`}
              </Typography>
              <Typography>{hotel.city}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={
                {
                  // 16:9
                  // pt: "56.25%",
                }
              }
              image={hotel.image}
              alt={hotel.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography>
                {readMore
                  ? hotel.description
                  : `${hotel.description.substring(0, 20)}...
        `}
                <span
                  variant="subtitle1"
                  style={{ cursor: "pointer", color: "#1976d2" }}
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? "show less" : "read more"}
                </span>
              </Typography>
              <Typography>
                <b>Address : </b>

                {readMoreAddress
                  ? hotel.address + " " + hotel.state
                  : `${hotel.address.substring(0, 20)}...
        `}
                <span
                  variant="subtitle1"
                  style={{ cursor: "pointer", color: "#1976d2" }}
                  onClick={() => setReadMoreAddress(!readMoreAddress)}
                >
                  {readMore ? "show less" : "read more"}
                </span>
              </Typography>
              <Typography>
                <b>Contact No : </b>
                {hotel.contact_no}
              </Typography>
              <Typography>
                <b>Website : </b>
                {hotel.website}
              </Typography>
              <Typography>
                <b>Price : </b>
                {hotel.price}
              </Typography>
              <Typography>
                <b>Star : </b>
                {hotel.star}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Not Interested</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SavedHotel;
