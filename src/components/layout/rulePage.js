import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { CodeSection } from "react-code-section-lib";
import SimpleBreadcrumbs from "../util/BreadCrumb";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Box from "@mui/material/Box";
import AccessibleTwoToneIcon from "@mui/icons-material/AccessibleTwoTone";
import Chip from "@mui/material/Chip";
import Fab from "@mui/material/Fab";
import ThumbUpAltTwoToneIcon from "@mui/icons-material/ThumbUpAltTwoTone";
import ThumbDownTwoToneIcon from "@mui/icons-material/ThumbDownTwoTone";
import DialogActions from "@mui/material/DialogActions";
import { Link } from "react-router-dom";
import { fetchItemData } from "../util/dataService";

function ItemPage({ ruleData }) {
  const [itemData, setItemData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(`Rule Data is: ${ruleData}`);
  useEffect(() => {
    let isMounted = true; // Flag to track if the component is still mounted

    // Fetch the item data when the component mounts
    fetchItemData(ruleData)
      .then((data) => {
        if (isMounted) {
          // Check if the component is still mounted before updating state
          setItemData(data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
          setIsLoading(false);
        }
      });

    return () => {
      // This cleanup function runs when the component unmounts
      isMounted = false;
    };
  }, [ruleData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:{ruleData}
        {itemData} {error.message}
      </div>
    );
  }

  if (!ruleData) {
    return <div>No item found</div>;
  }

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <SimpleBreadcrumbs />
            <Divider />
            <Typography sx={{ p: 2 }} m="auto" variant="overline" gutterBottom>
              {ruleData.id} {ruleData.name}
            </Typography>
            <IconButton
              component="button"
              aria-label="close"
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500]
              }}
            >
              <CloseIcon />
            </IconButton>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Typography sx={{ mb: 1.5, pt: 1.5 }} variant="overline">
                {ruleData.shortDescription}
              </Typography>
            </Grid>
            <Typography sx={{ mb: 1.5, pt: 1.5 }} variant="">
              {ruleData.issueDescription}
            </Typography>
            <Box mt={2}>
              <Chip
                variant="outlined"
                color="warning"
                icon={<TagFacesIcon />}
                label={ruleData.criteria}
              />
            </Box>
            <Box mt={2} mb={2}>
              <Chip
                variant="outlined"
                color="primary"
                icon={<AccessibleTwoToneIcon />}
                label={ruleData.WCAGLevel}
              />
            </Box>
            <Typography variant="overline">Issue Resolution:</Typography>
            <Box sx={{ width: "100%" }} mb={2}>
              <CodeSection>{ruleData.issueResolution}</CodeSection>
            </Box>
            <DialogActions sx={{ p: 2 }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing="2"
                sx={{ p: 1 }}
              >
                <Box sx={{ width: "75%" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6}>
                      <Link
                        component="button"
                        to={`/${ruleData.criteria}/${ruleData.route}_success`}
                      >
                        <Fab color="success" variant="extended">
                          <ThumbUpAltTwoToneIcon sx={{ mr: 1 }} />
                          Success
                        </Fab>
                      </Link>
                    </Grid>
                    <Grid item xs={6}>
                      <Link
                        to={`/${ruleData.criteria}/${ruleData.route}_failure`}
                      >
                        <Fab
                          component="button"
                          color="error"
                          variant="extended"
                        >
                          <ThumbDownTwoToneIcon sx={{ mr: 1 }} />
                          Failures
                        </Fab>
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </DialogActions>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ItemPage;
