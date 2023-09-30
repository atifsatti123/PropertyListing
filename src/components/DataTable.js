import React, { useState } from "react";

// DataTableView.js

import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TextField,
  TablePagination,
} from "@mui/material";

const DataTable = ({ listings }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredListings = listings.filter((listing) =>
    listing.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Beds</TableCell>
              <TableCell>Bath</TableCell>
              <TableCell>Covered Area (SQFT)</TableCell>
              <TableCell>Property Type</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredListings
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((listing, index) => (
                <TableRow key={index}>
                  <TableCell>{listing.title}</TableCell>
                  <TableCell>{listing.address}</TableCell>
                  <TableCell>{listing.beds}</TableCell>
                  <TableCell>{listing.bath}</TableCell>
                  <TableCell>{listing.coveredAreaSQFT}</TableCell>
                  <TableCell>{listing.propertyType}</TableCell>
                  <TableCell>{listing.price}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredListings.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default DataTable;
