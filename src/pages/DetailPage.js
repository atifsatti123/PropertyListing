import React from "react";
import { useParams } from "react-router-dom";
import listings from "../data/listings";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

const DetailPage = () => {
  const { id } = useParams();
  const newId = id ? parseInt(id) : id;
  const listing = listings.find((listing) => listing.id == id);

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="200"
        image={listing.imageUrl}
        alt={listing.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {listing.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Address: {listing.address}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Beds: {listing.beds}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Bath: {listing.bath}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Covered Area (SQFT): {listing.coveredAreaSQFT}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DetailPage;
