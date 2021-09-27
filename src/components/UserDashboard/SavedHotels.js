import React, { useState, useEffect } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Navbar from "../UserDashboard/Navbar";
import Sidebar from "../UserDashboard/Sidebar";
import Container from "@mui/material/Container";
import Copyright from "../pages/Footer";
import SavedHotel from "./SavedHotel";
import Grid from "@mui/material/Grid";

const API_URL = "http://localhost:8080";
const mdTheme = createTheme();

const SavedHotels = () => {
  const [repo, setRepo] = useState([]);
  const user = JSON.parse(localStorage.getItem("myData"));
  console.log(user.id);

  const url = `${API_URL}/hotels/get-all/${user.id}`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getRepo = () => {
    axios.get(url).then((response) => {
      console.log(response.data);
      const myRepo = response.data;
      setRepo(myRepo);
    });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          }}
        >
          <h2 style={{ marginLeft: "20px" }}>Saved Hotels</h2>

          <Container sx={{ py: 1 }}>
            {/* End hero unit */}
            {repo.length > 0 ? (
              <Grid container spacing={3}>
                {repo.map((item, index) => (
                  <Grid item key={index} md={6}>
                    <SavedHotel hotel={item} key={index} />{" "}
                  </Grid>
                ))}
              </Grid>
            ) : (
              <div>
                <p>No Records Available..!</p>
              </div>
            )}
          </Container>

          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SavedHotels;
