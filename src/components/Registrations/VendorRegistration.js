import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import { Link } from 'react-router-dom';
import Box from "@material-ui/core/Box";
import Register from "./Register";
//import { useHistory } from "react-router-dom";
import axios from "axios";
import Copyright from "../pages/Footer";
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function VendorRegistration(props) {
  const classes = useStyles();

  const [data, setdata] = useState({
    fname: "",
    lname: "",
    company_name: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    mobno: "",
    email: "",
    password: "",
  });
  const apiUrl = "http://localhost:8080/vendor/sign-up-vendor";

  // const Registerfun = () => {
  //   axios
  //     .post("http://localhost:8080/vendor/sign-up-vendor", {
  //       fname: fname,
  //       lname: lname,
  //       company_name: company_name,
  //       address: address,
  //       pincode: pincode,
  //       city: city,
  //       state: state,
  //       mobno: mobno,
  //       email: email,
  //       password: password,
  //     })
  //     .then((response) => {
  //       localStorage.setItem("user-info", JSON.stringify(response.data));
  //       history.push("/VendorLogin");
  //       console.log(response.data);
  //     });
  // };

  const Registration = (e) => {
    e.preventDefault();
    // debugger;
    const data1 = {
      fname: data.fname,
      lname: data.lname,
      company_name: data.company_name,
      address: data.address,
      pincode: data.pincode,
      city: data.city,
      state: data.state,
      mobno: data.mobno,
      email: data.email,
      password: data.password,
    };
    axios.post(apiUrl, data1).then((result) => {
      //  debugger;
      console.log(result.data);
      if (result.data.Status === "Invalid") alert("Invalid Vendor");
      else {
        localStorage.setItem("vendor-info", JSON.stringify(result.data));
        props.history.push("/VendorLogin");
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
          <h1> Vendor Registration</h1>
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
                  id="company_name"
                  label="business Name"
                  name="company_name"
                  autoComplete="business"
                  value={data.company_name}
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
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="pincode"
                  label="Pin Code"
                  name="pincode"
                  autoComplete="pincode"
                  value={data.pincode}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="city"
                  name="city"
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  autoFocus
                  value={data.city}
                  onChange={onChange}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="state"
                  label="State"
                  name="state"
                  autoComplete="state"
                  value={data.state}
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
                <Link href="/VendorLogin" variant="body2">
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
