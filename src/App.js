import React, { useEffect, useState } from "react";
import clsx from "clsx";
import "./styles.css";
import { makeStyles } from "@material-ui/core";
import {
  Link,
  Container,
  IconButton,
  Typography,
  CssBaseline,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  List,
  Divider
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems, secondaryListItems } from "./listItems";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import Search from "./components/layout/search";
import Clickables from "./components/pages/Criteria/Clickables/Clickables";
import Context from "./components/pages/Criteria/Context/Context";
import Carousels from "./components/pages/Criteria/Carousels/Carousels";
import Forms from "./components/pages/Criteria/Forms/Forms";
import Document from "./components/pages/Criteria/Document/Document";
import Errors from "./components/pages/Criteria/Errors/Errors";
import Graphics from "./components/pages/Criteria/Graphics/Graphics";
import Keyboard from "./components/pages/Criteria/Keyboard/Keyboard";
import Navigation from "./components/pages/Criteria/Navigation/Navigation";
import Readability from "./components/pages/Criteria/Readability/Readability";
import Headings from "./components/pages/Criteria/Headings/Headings";
import Tables from "./components/pages/Criteria/Tables/Tables";
import KeyboardRoutes from "./components/pages/Criteria/Keyboard/KbruleRoutes";
import FormruleRoutes from "./components/pages/Criteria/Forms/rules/FormruleRoutes";
import ItemPage from "./components/layout/rulePage";
import ListRoutes from "./routes/routes";
import { fetchItemData } from "./components/util/dataService"; // Import your data fetching function
import FormListRulesWithRoutes from "./components/pages/Criteria/Forms/Forms";
import AllRulesWithRoutes from "./components/pages/Criteria/AllRulesLinks";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()} {new Date().getDay()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

function callit() {
  console.log("arguments", arguments);
}

callit(["a", "b"]);

export default function App() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const path = String(pathnames);
  const currentPath = pathnames[1];

  // State to store the item data
  const [itemData, setItemData] = useState(null);
  console.log(itemData);
  // Function to fetch and set the item data
  const fetchItem = (currentRule) => {
    //console.log(`Found Data ${currentRule}`);
    fetchItemData(currentRule) // Replace with your actual data fetching function
      .then((data) => {
        setItemData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching item data:", error);
      });
  };

  useEffect(() => {
    // Fetch the item data when the component mounts
    fetchItem(currentPath); // Assuming 'path' contains the itemID from the URL
  }, [currentPath]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  const formattedPath = capitalizeFirstLetter(path);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // clsx combine mutliple classes
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
            onClick={() => goToPage("/")}
          >
            Dashboard - {formattedPath}
          </Typography>
          <IconButton color="inherit">
            <Search></Search>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Routes>
            <Route index element={<Home navigate={navigate} title="Home" />} />
            <Route path="rules/*" element={<ListRoutes />} />
            <Route
              path="/*"
              element={
                <AllRulesWithRoutes itemData={itemData} navigate={navigate} />
              }
            />
            <Route
              path="clickables"
              element={<Clickables navigate={navigate} title="Clickables" />}
            />
            <Route
              path="context"
              element={<Context navigate={navigate} title="Context" />}
            />
            <Route
              path="headings"
              element={<Headings navigate={navigate} title="Headings" />}
            />
            <Route
              path="document"
              element={<Document navigate={navigate} title="Document" />}
            />
            <Route
              path="errors"
              element={<Errors navigate={navigate} title="Errors" />}
            />
            <Route
              path="forms"
              element={<Forms navigate={navigate} title="Forms" />}
            />

            <Route
              path="graphics"
              element={<Graphics navigate={navigate} title="Graphics" />}
            />
            <Route
              path="keyboard"
              element={<Keyboard navigate={navigate} title="Keyboard" />}
            />
            {KeyboardRoutes}
            {FormruleRoutes}
            <Route
              path="navigation"
              element={<Navigation navigate={navigate} title="Navigation" />}
            />
            <Route
              path="readability"
              element={<Readability navigate={navigate} title="Readability" />}
            />
            <Route
              path="tables"
              element={<Tables navigate={navigate} title="Tables" />}
            />
          </Routes>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
