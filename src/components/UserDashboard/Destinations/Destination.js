import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import { useHistory } from "react-router-dom";

function addDestination(id) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // let history = useHistory();
  const user = JSON.parse(localStorage.getItem("myData"));
  console.log(id, user.id);

  const apiUrl = "http://localhost:8080/destinations/add";

  // debugger;
  const data = { userId: user.id, destId: id };
  axios.post(apiUrl, data).then((result) => {
    // debugger;
    console.log(result.data);
    //const userDetails = result.data.user;
    console.log(result.data.message);
    console.log(result.data.status);
    if (result.data.status === 201) alert(result.data.message);
    else alert("Something went wrong!!");
  });
}
//const [readMore, setReadMore] = useState(true);

class Destination extends React.Component {
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
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {`${
                    this.props.title.length > 25
                      ? this.props.title.substring(0, 30) + "..."
                      : this.props.title
                  }`}
                  {/* {this.props.title} */}
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
                    this.props.description.length > 20
                      ? this.props.description.substring(0, 20) + "..."
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
                <Button
                  size="small"
                  onClick={() => addDestination(this.props.id)}
                >
                  Add
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
export default Destination;
