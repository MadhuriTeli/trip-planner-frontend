import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Login from "./Login";
import Copyright from "../pages/Footer";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function VendorLogin(props) {
  const classes = useStyles();

  const [vendor, setvendor] = useState({ email: "", password: "" });
  const apiUrl = "http://localhost:8080/vendor/login-vendor";
  const LoginFn = (e) => {
    e.preventDefault();
    // debugger;
    const data = { email: vendor.email, password: vendor.password };
    axios.post(apiUrl, data).then((result) => {
      // debugger;
      console.log(result.data);
      const serializedState = JSON.stringify(result.data.vendor);
      var a = localStorage.setItem("myData", serializedState);
      console.log("A:", a);
      // const vendorDetails = result.data.vendor;
      console.log(result.data.message);
      console.log(result.data.status);
      if (result.data.status === 200) props.history.push("/vendorDashboard");
      else alert("Invalid vendor");
    });
  };

  const onChange = (e) => {
    e.persist();
    //  debugger;
    setvendor({ ...vendor, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Login />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <h1>Vendor Log In</h1>
          <form className={classes.form} onSubmit={LoginFn} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={vendor.email}
              onChange={onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={vendor.password}
              onChange={onChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/VendorRegistration" variant="body2">
                  {"Don't have an account? Register"}
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
