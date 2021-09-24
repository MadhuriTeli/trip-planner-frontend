import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutline from "@mui/icons-material/PersonOutline";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const MainListItems = () => {
  return (
    <div>
      <NavLink
        activeClassName="navbar_link--active"
        className="navbar_link"
        to="/userProfile"
      >
        <ListItem button>
          <ListItemIcon>
            <PersonOutline />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </NavLink>
      <NavLink
        activeClassName="navbar_link--active"
        className="navbar_link"
        to="/cart"
      >
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItem>
      </NavLink>
    </div>
  );
};
export default MainListItems;
export const SecondaryListItems = () => {
  return (
    <div>
      <ListSubheader inset>Saved Plans</ListSubheader>
      <NavLink
        activeClassName="navbar_link--active"
        className="navbar_link"
        to="/savedPackages"
      >
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Packages" />
        </ListItem>
      </NavLink>
      <NavLink
        activeClassName="navbar_link--active"
        className="navbar_link"
        to="/savedDestinations"
      >
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Destinations" />
        </ListItem>
      </NavLink>
      <NavLink
        activeClassName="navbar_link--active"
        className="navbar_link"
        to="/savedHotels"
      >
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Hotels" />
        </ListItem>
      </NavLink>
    </div>
  );
};
