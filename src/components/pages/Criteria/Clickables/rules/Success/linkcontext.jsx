import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function LinkContext() {
  return (
    <>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                Link Context{" "}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                Examples Issues
              </Typography>
              <Divider sx={{ mb: 2 }}></Divider>

              <Grid item xs={12}>
                <Stack direction="row" spacing={1}></Stack>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
