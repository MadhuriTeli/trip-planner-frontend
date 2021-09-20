import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserRegistration from "./components/UserRegistration";
import VendorRegistration from "./components/VendorRegistration";
import UserLogin from "./components/UserLogin";
import VendorLogin from "./components/VendorLogin";
import Dashboard from "./components/UserDashboard/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserRegistration} />
        <Route path="/VendorRegistration" component={VendorRegistration} />
        <Route path="/VendorLogin" component={VendorLogin} />
        <Route path="/UserLogin" component={UserLogin} />
        <Route path="/UserDashboard" component={Dashboard} />
      </Switch>
    </Router>

    // <div>
    //     <Register />
    // </div>
  );
}

export default App;
