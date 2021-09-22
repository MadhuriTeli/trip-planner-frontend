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
import { useHistory } from "react-router-dom";
import axios from "axios";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
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

export default function UserRegistration() {
  const classes = useStyles();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [mobno, setMobno] = useState("");
  const [dob, setDob] = useState(new Date());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  // async function UserSignUp() {
  //   let item = { fname, lname, address, mobno, dob, email, password };
  //   console.warn(item);
  //   let result = await fetch("http://localhost:8080/user/sign-up", {
  //     method: "POST",
  //     body: JSON.stringify(item),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });
  //   result = await result.json();
  //   localStorage.setItem("user-info", JSON.stringify(result));
  //   history.push("/userLogin");
  // }

  // const [post, setPost] = React.useState(null);
  // React.useEffect(() => {
  //   axios.get(`${baseURL}`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  const Registerfun = () => {
    axios
      .post("http://localhost:8080/user/sign-up", {
        fname: fname,
        lname: lname,
        address: address,
        mobno: mobno,
        dob: dob,
        email: email,
        password: password,
      })
      .then((response) => {
        // setPost(response.data);
        localStorage.setItem("user-info", JSON.stringify(response.data));
        history.push("/userLogin");
        console.log(response.data);
      });
  };
  //if (!post) return "No post!";
  return (
    <div>
      <Register />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <h1>User Registration</h1>
          <form className={classes.form} noValidate>
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
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
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
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                  value={mobno}
                  onChange={(e) => setMobno(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    variant="outlined"
                    required
                    id="dob"
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    autoComplete="dob"
                    value={dob}
                    onChange={(newValue) => setDob(newValue)}
                    renderInput={(params) => (
                      <TextField variant="outlined" {...params} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={Registerfun}
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
