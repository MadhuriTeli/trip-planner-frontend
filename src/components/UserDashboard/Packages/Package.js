import React, { useState, useEffect } from "react";
import axios from "axios";
//import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const API_URL = "http://localhost:8080";

class Package extends React.Component {
  handleClick = () => {
    console.log("Amol");
    const url = `${API_URL}/packages/2`;
    console.log(url);

    axios(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }

  render() {
    const theme = createTheme();
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
              {/* {this.props.id} */}
              <CardContent>
                <Typography>{this.props.id}</Typography>

                <Typography gutterBottom variant="h6" component="h2">
                  {`${this.props.tripname.length > 10
                    ? this.props.tripname.substring(0, 15) + "..."
                    : this.props.tripname
                    }`}
                </Typography>
                <Typography>{this.props.duration}</Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={
                  {
                    // 16:9
                    // pt: "56.25%",
                  }
                }
                image={this.props.image}
                alt={this.props.tripname}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography>
                  {`${this.props.description.length > 20
                    ? this.props.description.substring(0, 20) + "..."
                    : this.props.description
                    }`}
                </Typography>
                <Typography>
                  {" "}
                  {`${this.props.package_inclusions.length > 25
                    ? this.props.package_inclusions.substring(0, 25) + "..."
                    : this.props.package_inclusions
                    }`}
                </Typography>
                <Typography>{this.props.amount}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={this.handleClick}>View</Button>
                <Button size="small">Add</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
export default Package;
