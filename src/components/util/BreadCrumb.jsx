import React from "react";
import { Breadcrumbs, Paper, Typography } from "@material-ui/core";
import { useLocation, NavLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Grid from "@mui/material/Grid";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const SimpleBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Grid container xs={12}>
      <Paper elevation={0} style={{ padding: "8px 16px" }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <NavLink
            underline="hover"
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Home
          </NavLink>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const formattedValue = capitalizeFirstLetter(value);

            return last ? (
              <Typography color="textPrimary" key={to}>
                {formattedValue}
              </Typography>
            ) : (
              <NavLink
                underline="hover"
                to={to}
                style={{ textDecoration: "none", color: "inherit" }}
                key={to}
              >
                {formattedValue}
              </NavLink>
            );
          })}
        </Breadcrumbs>
      </Paper>
    </Grid>
  );
};

export default SimpleBreadcrumbs;
