import React from 'react';
//import Register from './components/Register';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from './components/Login';
import UserRegistration from './components/UserRegistration';
import VendorRegistration from './components/VendorRegistration';
import Dashboard from './components/UserDashboard/Dashboard';

function App() {
    return (
        <Router>
            <Switch>
                {/* <Route path="/" exact component={Register} /> */}
                <Route path="/login" component={Login} />
                 <Route path="/" exact component={UserRegistration} />
                <Route path="/VendorRegistration" component={VendorRegistration} />
                  <Route path="/UserDashboard" component={Dashboard} />
            </Switch>
        </Router>

        // <div>
        //     <Register />
        // </div>
    );
}

export default App;