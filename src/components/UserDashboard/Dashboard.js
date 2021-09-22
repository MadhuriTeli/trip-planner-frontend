import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const useStyles = () => ({
  sidebar: {
    display: "inline",
    float: "left",
  },
  maincontent: {
    display: "inline",
    float: "left",
  },
});

function DashboardContent() {
  const classes = useStyles();
  const [user, setuser] = useState({ email: "", password: "" });
  useEffect(() => {
    var a = localStorage.getItem("myData");
    var b = JSON.parse(a);
    console.log(b.fname);
    setuser(b);
    console.log(user.fname);
  }, [user.fname]);

  return (
    <div>
      <Navbar />
      <Sidebar className={classes.sidebar} />
      <div className={classes.maincontent}>
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
