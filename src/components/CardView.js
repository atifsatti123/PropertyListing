import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";

const CardView = ({ listings }) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  // Array of image URLs
  // const imageUrl = Array.from({ length: 30 }, (_, i) => `property${i + 1}.jpg`);

  const filteredListings = listings.filter((listing) =>
    listing.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const handleDetails = (id) => {
    navigate(`/listing/${id}`);
  };

  return (
    <div>
      <TextField
        label="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Grid container spacing={3}>
        {filteredListings.map((listing, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                alt={listing.title}
                src={listing.imageUrl} // Set the image source dynamically
              />
              <CardContent>
                <Typography variant="h6">{listing.title}</Typography>
                <Typography>{listing.address}</Typography>
                <Typography>Beds: {listing.beds}</Typography>
                <Typography>Bath: {listing.bath}</Typography>
                <Typography>
                  Covered Area (SQFT): {listing.coveredAreaSQFT}
                </Typography>
                <Typography>Property Type: {listing.propertyType}</Typography>
                <Typography>Price: {listing.price}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => handleDetails(listing.id)}
                  variant="outlined"
                  color="primary"
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardView;
