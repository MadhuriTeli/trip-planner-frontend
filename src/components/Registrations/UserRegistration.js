import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Register from "./Register";
import Box from "@material-ui/core/Box";
//import { useHistory } from "react-router-dom";
import axios from "axios";
//const baseURL = "http://localhost:8080/user/sign-up";
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
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserRegistration(props) {
  const classes = useStyles();

  const [data, setdata] = useState({
    fname: "",
    lname: "",
    address: "",
    mobno: "",
    email: "",
    password: "",
  });
  const apiUrl = "http://localhost:8080/user/sign-up";

  const Registration = (e) => {
    e.preventDefault();
    // debugger;
    const data1 = {
      fname: data.fname,
      lname: data.lname,
      address: data.address,
      mobno: data.mobno,
      email: data.email,
      password: data.password,
    };
    axios.post(apiUrl, data1).then((result) => {
      //  debugger;
      console.log(result.data);
      if (result.data.Status === "Invalid") alert("Invalid User");
      else {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        props.history.push("/UserLogin");
      }
    });
  };
  const onChange = (e) => {
    e.persist();
    // debugger;
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Register />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <h1>User Registration</h1>
          <form className={classes.form} onSubmit={Registration} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="fname"
                  variant="outlined"
                  required
                  fullWidth
                  id="fname"
                  label="First Name"
                  autoFocus
                  onChange={onChange}
                  value={data.fname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lname"
                  label="Last Name"
                  name="lname"
                  autoComplete="lname"
                  value={data.lname}
                  onChange={onChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  value={data.address}
                  onChange={onChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="mobno"
                  label="Phone Number"
                  name="mobno"
                  autoComplete="phone"
                  value={data.mobno}
                  onChange={onChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={data.password}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/UserLogin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Container>
    </div>
  );
}
