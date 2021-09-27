import React, { useState, useEffect } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Navbar from "../UserDashboard/Navbar";
import Sidebar from "../UserDashboard/Sidebar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SavedDest from "./savedDest";
import Copyright from "../pages/Footer";
const API_URL = "http://localhost:8080";

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getRepo(), []);
  //const [readMore, setReadMore] = useState(true);
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
          }}
        >
          <h2 style={{ marginLeft: "20px" }}>Saved Destinations</h2>
          <Container sx={{ py: 1 }}>
            {repo.length > 0 ? (
              <Grid container spacing={2}>
                {repo.map((item, index) => (
                  <SavedDest dest={item} key={index} />
                ))}
              </Grid>
            ) : (
              <Grid container spacing={2} md={12}>
                No Records Available..!
              </Grid>
            )}
          </Container>
          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SavedDestinations;
