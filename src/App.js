import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserRegistration from "./components/UserRegistration";
import VendorRegistration from "./components/VendorRegistration";
import UserLogin from "./components/UserLogin";
import VendorLogin from "./components/VendorLogin";
import Dashboard from "./components/UserDashboard/Dashboard";
import VendorDashboard from "./components/VendorDashboard/VendorDashboard";
import About from "./components/UserDashboard/About";
import Packages from "./components/UserDashboard/Packages";
import Destinations from "./components/UserDashboard/Destinations";
import Hotels from "./components/UserDashboard/Hotels";
import SavedHotels from "./components/UserDashboard/SavedHotels";
import SavedDestinations from "./components/UserDashboard/SavedDestinations";
import SavedPackages from "./components/UserDashboard/SavedPackages";
import UserProfile from "./components/UserDashboard/UserProfile";
import Cart from "./components/UserDashboard/Cart";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserRegistration} />
        <Route path="/VendorRegistration" component={VendorRegistration} />
        <Route path="/VendorLogin" component={VendorLogin} />
        <Route path="/UserLogin" component={UserLogin} />
        <Route path="/UserDashboard" component={Dashboard} />
        <Route path="/VendorDashboard" component={VendorDashboard} />
        <Route path="/about" component={About} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/savedHotels" component={SavedHotels} />
        <Route path="/packages" component={Packages} />
        <Route path="/savedDestinations" component={SavedDestinations} />
        <Route path="/savedPackages" component={SavedPackages} />
        <Route path="/userProfile" component={UserProfile} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>

    // <div>
    //     <Register />
    // </div>
  );
}

export default App;
