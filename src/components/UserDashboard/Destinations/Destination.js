import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

class Product extends React.Component {
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
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {`${
                    this.props.title.length > 10
                      ? this.props.title.substring(0, 15) + "..."
                      : this.props.title
                  }`}
                </Typography>
                <Typography>{this.props.city}</Typography>
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
                alt={this.props.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography>
                  {`${
                    this.props.description.length > 25
                      ? this.props.description.substring(0, 25) + "..."
                      : this.props.description
                  }`}
                </Typography>
                <Typography>
                  {" "}
                  {`${
                    this.props.address.length > 25
                      ? this.props.address.substring(0, 25) + "..."
                      : this.props.address
                  }`}
                </Typography>
                <Typography>{this.props.visiting_hours}</Typography>
                <Typography>{this.props.visiting_fee}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Add</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
export default Product;
