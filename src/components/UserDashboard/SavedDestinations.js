import React, { useState, useEffect } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Navbar from "../UserDashboard/Navbar";
import Sidebar from "../UserDashboard/Sidebar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

const API_URL = "http://localhost:8080";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        TripPlanner
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const mdTheme = createTheme();

const SavedDestinations = () => {
  const [repo, setRepo] = useState([]);
  const user = JSON.parse(localStorage.getItem("myData"));
  console.log(user.id);

  const url = `${API_URL}/destinations/get-all/${user.id}`;
  const getRepo = () => {
    axios.get(url).then((response) => {
      console.log(response.data);
      const myRepo = response.data;
      setRepo(myRepo);
    });
  };
  useEffect(() => getRepo(), []);

  return (
    <ThemeProvider theme={mdTheme}>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            //  flexGrow: 1,
            //height: "100vh",
            // overflow: "auto",
          }}
        >
          <h2 style={{ marginLeft: "20px" }}>Saved Destinations</h2>
          <Container sx={{ py: 1 }}>
            <main>
              {repo.map((item, index) => (
                <Grid item key={index} md={3}>
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
                        {`${item.title}`}
                      </Typography>
                      <Typography>{item.city}</Typography>
                    </CardContent>
                    <CardMedia
                      component="img"
                      sx={
                        {
                          // 16:9
                          // pt: "56.25%",
                        }
                      }
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography>{`${item.description}`}</Typography>
                      <Typography>{`${item.address}`}</Typography>
                      <Typography>{item.visiting_hours}</Typography>
                      <Typography>{item.visiting_fee}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </main>
          </Container>
          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SavedDestinations;
