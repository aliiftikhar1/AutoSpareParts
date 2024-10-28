"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Toolbar,
  InputBase,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  IconButton,
  TablePagination,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const AddYear = () => {
  const [years, setYears] = useState([]); // store years data
  const [filteredYears, setFilteredYears] = useState([]); // for filtered years
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editingYear, setEditingYear] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "",
  });

  const [formData, setFormData] = useState({
    year: "", // field to store selected year
  });

  useEffect(() => {
    fetchYears();
  }, []);

  const fetchYears = async () => {
    try {
      const response = await axios.get("/api/year"); // API call to fetch years
      setYears(response.data);
      setFilteredYears(response.data);
    } catch (error) {
      console.error("Error fetching years:", error);
      setSnackbar({
        open: true,
        message: "Failed to fetch years.",
        type: "error",
      });
    }
  };

  useEffect(() => {
    let filtered = years;
    if (searchQuery) {
      filtered = filtered.filter((year) =>
        year.year.toString().includes(searchQuery)
      );
    }

    setFilteredYears(filtered);
  }, [searchQuery, years]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddOpen = () => {
    setFormData({
      year: "",
    });
    setOpenAddDialog(true);
  };

  const handleAddClose = () => {
    setOpenAddDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditOpen = (year) => {
    setEditingYear(year);
    setFormData({
      year: year.year,
    });
    setOpenEditDialog(true);
  };

  const handleEditClose = () => {
    setOpenEditDialog(false);
    setEditingYear(null);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const { year } = formData;

    if (!year) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields.",
        type: "error",
      });
      return;
    }
    try {
      await axios.put(`/api/year/${editingYear.id}`, formData); 
      setSnackbar({
        open: true,
        message: "Year updated successfully.",
        type: "success",
      });
      fetchYears();
      handleEditClose();
    } catch (error) {
      console.error("Error updating year:", error);
      setSnackbar({
        open: true,
        message: "Failed to update year.",
        type: "error",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/year/${id}`); // Delete year
      setSnackbar({
        open: true,
        message: "Year deleted successfully.",
        type: "warning",
      });
      fetchYears();
    } catch (error) {
      console.error("Error deleting year:", error);
      setSnackbar({
        open: true,
        message: "Failed to delete year.",
        type: "error",
      });
    }
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    const { year } = formData;

    if (!year) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields.",
        type: "error",
      });
      return;
    }

    try {
      await axios.post("/api/year", formData); // Add new year
      setSnackbar({
        open: true,
        message: "Year added successfully.",
        type: "success",
      });
      fetchYears();
      handleAddClose();
    } catch (error) {
      console.error("Error adding year:", error);
      setSnackbar({
        open: true,
        message: "Failed to add year.",
        type: "error",
      });
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Toolbar>
          <InputBase
            placeholder="Search years"
            value={searchQuery}
            onChange={handleSearch}
            style={{
              padding: "6px 10px",
              backgroundColor: "#eaeaea",
              borderRadius: "4px",
            }}
          />
        </Toolbar>
        <Button variant="contained" color="primary" onClick={handleAddOpen}>
          Add New Year
        </Button>
      </div>

      {/* Table displaying years */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredYears
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((year, index) => (
                <TableRow key={year.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{year.id}</TableCell>
                  <TableCell>{year.year}</TableCell>
                  <TableCell>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <FaUserEdit
                        onClick={() => handleEditOpen(year)}
                        style={{
                          fontSize: "20px",
                          color: "#1976d2",
                          cursor: "pointer",
                        }}
                      />
                      <MdDeleteForever
                        onClick={() => handleDelete(year.id)}
                        style={{
                          fontSize: "20px",
                          color: "#d32f2f",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredYears.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      {/* Add Year Dialog */}
      <Dialog open={openAddDialog} onClose={handleAddClose} maxWidth="md" fullWidth>
        <DialogTitle>
          Add New Year
          <IconButton
            aria-label="close"
            onClick={handleAddClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleAddSubmit}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="year-select-label">Select Year</InputLabel>
              <Select
                labelId="year-select-label"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                label="Year"
              >
                {Array.from({ length: 30 }, (_, i) => (
                  <MenuItem key={i} value={1990 + i}>
                    {1990 + i}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <DialogActions>
              <Button onClick={handleAddClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary" variant="contained">
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Year Dialog */}
      <Dialog open={openEditDialog} onClose={handleEditClose} maxWidth="md" fullWidth>
        <DialogTitle>
          Edit Year
          <IconButton
            aria-label="close"
            onClick={handleEditClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleEditSubmit}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="year-edit-select-label">Select Year</InputLabel>
              <Select
                labelId="year-edit-select-label"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                label="Year"
              >
                {Array.from({ length: 30 }, (_, i) => (
                  <MenuItem key={i} value={1990 + i}>
                    {1990 + i}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <DialogActions>
              <Button onClick={handleEditClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary" variant="contained">
                Update
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Snackbar Notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.type}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddYear;
