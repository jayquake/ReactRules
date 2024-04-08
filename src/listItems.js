import * as React from "react";

import ListSubheader from "@mui/material/ListSubheader";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import LayersIcon from "@mui/icons-material/Layers";
import ArticleIcon from "@mui/icons-material/Article";
import AnimationIcon from "@mui/icons-material/Animation";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import NavigationIcon from "@mui/icons-material/Navigation";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Typography } from "@mui/material";
import CustomNavLink from "./components/layout/customNavLink";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import HtmlTwoToneIcon from "@mui/icons-material/HtmlTwoTone";

export const mainListItems = (
  <React.Fragment>
    <Typography underline="none" m="auto" variant="overline">
      <CustomNavLink
        to="/clickables"
        label="Clickables"
        icon={ShoppingCartIcon}
      />
      <CustomNavLink to="/context" label="Context" icon={PeopleIcon} />
      <CustomNavLink to="/document" label="Document" icon={ArticleIcon} />
      <CustomNavLink to="/errors" label="Errors" icon={LayersIcon} />
      <CustomNavLink to="/forms" label="Forms" icon={BorderColorIcon} />
      <CustomNavLink to="/graphics" label="Graphics" icon={AnimationIcon} />
      <CustomNavLink
        to="/headings"
        label="Headings"
        icon={AccountTreeTwoToneIcon}
      />
      <CustomNavLink to="/keyboard" label="Keyboard" icon={KeyboardIcon} />
      <CustomNavLink
        to="/navigation"
        label="Navigation"
        icon={NavigationIcon}
      />{" "}
      <CustomNavLink
        to="/readability"
        label="Readability"
        icon={AutoStoriesIcon}
      />{" "}
      <CustomNavLink to="/tables" label="Tables" icon={BackupTableIcon} />
    </Typography>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Quick Links
    </ListSubheader>
    <CustomNavLink to="/rules" label="Rules" icon={BackupTableIcon} />
    <CustomNavLink to="/tables" label="Page Scanner" icon={BookmarkIcon} />
    <CustomNavLink to="/tables" label="HTML Elements" icon={HtmlTwoToneIcon} />
  </React.Fragment>
);
