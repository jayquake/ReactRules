import React from "react";
import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const CustomNavLink = ({ to, label, icon: Icon }) => {
  const listItemTextStyle = { color: "#a19f99" };

  // Define a CSS class to remove the underline
  const linkStyle = {
    textDecoration: "none",
    width: "100%"
  };

  return (
    <NavLink role="button" to={to} style={linkStyle}>
      {({ isActive }) => (
        <ListItemButton
          sx={{ width: "100%" }}
          button
          component="button"
          selected={isActive}
        >
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={label} sx={listItemTextStyle} />
        </ListItemButton>
      )}
    </NavLink>
  );
};

export default CustomNavLink;
