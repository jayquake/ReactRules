import React, { Component } from "react";
import { createFilter } from "../util/Filter";
import { createSorter } from "../util/Sort";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CodeSection } from "react-code-section-lib";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import AccessibleTwoToneIcon from "@mui/icons-material/AccessibleTwoTone";
import Fab from "@mui/material/Fab";
import ThumbUpAltTwoToneIcon from "@mui/icons-material/ThumbUpAltTwoTone";
import ThumbDownTwoToneIcon from "@mui/icons-material/ThumbDownTwoTone";
import SimpleBreadcrumbs from "../util/BreadCrumb";
import CustomizedDialogs from "../layout/ruleModal";
class List extends Component {
  state = {
    filters: this.props.filters,
    sorters: this.props.sorters
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
  static capitalizeFirstLetter(value) {
    if (typeof value !== "string") {
      value = value.toString();
    }
    value = value.trim();
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
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
      data: this.parseData(data)
    });
  };

  render() {
    const { data } = this.state;

    return data ? this.renderData(data) : this.renderLoading();
  }

  renderData(data) {
    if (data && data.length > 0) {
      const { filters } = this.state;
      let criteria = "";

      if (Array.isArray(filters) && filters.length) {
        const criteriaFilter = filters.find(
          (filter) => filter.property === "criteria"
        );
        if (criteriaFilter) {
          criteria = criteriaFilter.value;
        }

        data = data.filter(createFilter(...filters));
        console.log("Filtered Data:", data);
      }

      const formattedFilterValue = List.capitalizeFirstLetter(criteria);
      return (
        <>
          <Grid item xs={12}>
            <SimpleBreadcrumbs />
            <Paper>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Typography m="auto" variant="overline" gutterBottom>
                    Rules Associated with the criteria:
                    <Typography align="center" variant="subtitle1">{`${
                      formattedFilterValue.split("/")[1]
                    }`}</Typography>
                  </Typography>
                </Paper>
              </Grid>
            </Paper>
          </Grid>

          {data.map((item) => (
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container>
                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  >
                    <Typography m="auto" variant="overline">
                      {item.id} {item.name}
                    </Typography>
                    <Divider sx={{ mb: 2 }}></Divider>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography sx={{ mb: 1.5, pt: 1.5 }} variant="overline">
                        {item.shortDescription}
                      </Typography>
                    </Grid>
                    <CardContent>
                      <Typography sx={{ mb: 1.5, pt: 1.5 }} variant="">
                        {item.issueDescription}
                      </Typography>
                      <Box mt={2}>
                        <Chip
                          variant="outlined"
                          color="warning"
                          icon={<TagFacesIcon />}
                          label={item.criteria}
                        />
                      </Box>
                      <Box mt={2} mb={2}>
                        <Chip
                          variant="outlined"
                          color="primary"
                          icon={<AccessibleTwoToneIcon />}
                          label={item.WCAGLevel}
                        />
                      </Box>
                      <Typography variant="overline">
                        Issue Resolution:
                      </Typography>
                      <Box sx={{ width: "100%" }} mb={2}>
                        <CodeSection>{item.issueResolution}</CodeSection>
                      </Box>
                    </CardContent>
                    <Divider sx={{ mb: 2 }}></Divider>
                    <CardActions>
                      {" "}
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing="2"
                      >
                        <Box sx={{ width: "75%" }}>
                          <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                          >
                            <Grid item xs={6}>
                              <Link
                                to={`/${item.criteria}/${item.route}/success`}
                              >
                                <Fab color="success" variant="extended">
                                  <ThumbUpAltTwoToneIcon sx={{ mr: 1 }} />
                                  Success
                                </Fab>
                              </Link>
                            </Grid>
                            <Grid item xs={6}>
                              <Link
                                to={`/${item.criteria}/${item.route}/failure`}
                              >
                                <Fab color="error" variant="extended">
                                  <ThumbDownTwoToneIcon sx={{ mr: 1 }} />
                                  Failures
                                </Fab>
                              </Link>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    </CardActions>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          ))}
        </>
      );
    } else {
      return <div>No items found</div>;
    }
  }

  renderLoading() {
    return <div>Loading...</div>;
  }
}

export default List;
