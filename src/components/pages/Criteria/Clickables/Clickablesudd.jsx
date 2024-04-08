import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function Clickables() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                Clickables
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                Clickables
              </Typography>
              <Divider sx={{ mb: 2 }}></Divider>

              <Grid item xs={12}>
                <Stack direction="row" spacing={1}>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      color="info"
                      component={Link}
                      to={{
                        pathname: "/Clickables",
                        pageName: ""
                      }}
                    >
                      New Window Links
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      color="info"
                      component={Link}
                      to={{
                        pathname: "/Clickables",
                        pageName: ""
                      }}
                    >
                      Ambiguous Links{" "}
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      color="info"
                      component={Link}
                      to={{
                        pathname: "/Clickables/LinkContext",
                        pageName: "Link Context"
                      }}
                    >
                      Link Context{" "}
                    </Button>
                  </Grid>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      color="info"
                      component={Link}
                      to={{
                        pathname: "/Clickables",
                        pageName: "Empty Links"
                      }}
                    >
                      Empty Links{" "}
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      color="info"
                      component={Link}
                      to={{
                        pathname: "/Clickables",
                        pageName: ""
                      }}
                    >
                      Button Roles{" "}
                    </Button>
                  </Grid>
                </Stack>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
