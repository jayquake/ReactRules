import React, { Component } from "react";
import { createFilter } from "../util/Filter";
import { createSorter } from "../util/Sort";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import SimpleBreadcrumbs from "../util/BreadCrumb";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import CustomizedDialogs from "../layout/ruleModal";
import ArticleIcon from "@mui/icons-material/Article";
import LinearDeterminate from "../util/LoadingState";
import CustomNavLink from "../layout/customNavLink";
import { Container } from "@mui/joy";
class List extends Component {
  state = {
    filters: this.props.filters,
    sorters: this.props.sorters,
    loading: true,
    data: null
  };

  static defaultProps = {
    filters: [
      {
        property: "criteria",
        value: ""
      },
      {
        property: "enabled",
        value: true
      }
    ],

    sorters: [
      {
        property: "name"
      },
      {
        property: "criteria"
      }
    ]
  };

  static transformInput(input) {
    if (typeof input !== "string") {
      // If input is not a string, convert it to a string
      input = input.toString();
    }

    // Remove trailing '/I'
    if (input.endsWith("/I")) {
      input = input.slice(0, -2);
    }

    // Remove leading slash
    if (input.startsWith("/")) {
      input = input.slice(1);
    }

    // Capitalize the first letter and return the result
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  componentDidMount() {
    fetch("/data.json")
      .then((res) => res.json())
      .then(this.onLoad);
  }

  parseData(data) {
    const { sorters } = this.state;

    if (data && data.length && Array.isArray(sorters) && sorters.length) {
      data.sort(createSorter(...sorters));
    }

    return data;
  }

  onLoad = (data) => {
    this.setState({
      data: this.parseData(data),
      loading: false
    });
  };

  render() {
    const { data, loading, progress } = this.state;

    return data ? this.renderData(data) : this.renderLoading(progress);
  }

  renderData(data) {
    if (data && data.length > 0) {
      const { filters } = this.state;
      const filteredData = data.filter(createFilter(...filters)); // Apply filters
      const formattedFilterValue = List.transformInput(
        filteredData[0].criteria
      ).split("/")[0];
      console.log(filteredData[0].criteria);

      return (
        <>
          <Container sx={{ mt: 4, mb: 4 }}>
            <Grid item xs={12}>
              <Paper>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <SimpleBreadcrumbs />
                  <Divider />
                  <Typography
                    sx={{ p: 2 }}
                    m="auto"
                    variant="overline"
                    gutterBottom
                  >
                    Rules Associated with the criteria:
                    <Typography
                      align="center"
                      variant="subtitle1"
                    >{`${formattedFilterValue}`}</Typography>
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing="2"
                      sx={{ p: 1 }}
                    >
                      {filteredData.map((item) => (
                        <CustomNavLink
                          to={`/${item.criteria}/${item.route}`}
                          itemData={item}
                          label={`${item.name}: ${item.shortDescription}`}
                          icon={MenuBookTwoToneIcon}
                        />
                      ))}
                    </Grid>
                  </Box>
                </Paper>
              </Paper>
            </Grid>
          </Container>
        </>
      );
    } else {
      return <div>No items found</div>;
    }
  }

  renderLoading(progress) {
    return (
      <>
        <Container sx={{ mt: 8, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  >
                    <LinearDeterminate progress={progress} />
                  </Paper>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default List;
