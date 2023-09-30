import React, { useState } from "react";
import DataTable from "../components/DataTable";
import CardView from "../components/CardView";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

const LandingPage = ({ listings }) => {
  const [viewMode, setViewMode] = useState("table");

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Property Listings</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={2} mb={2} display="flex" justifyContent="flex-end">
          <Button
            variant={viewMode === "table" ? "contained" : "outlined"}
            color="primary"
            onClick={() => setViewMode("table")}
          >
            Table View
          </Button>
          <Button
            variant={viewMode === "card" ? "contained" : "outlined"}
            color="primary"
            onClick={() => setViewMode("card")}
          >
            Card View
          </Button>
        </Box>
        {viewMode === "table" ? (
          <DataTable listings={listings} />
        ) : (
          <CardView listings={listings} />
        )}
      </Container>
    </div>
  );
};
export default LandingPage;
