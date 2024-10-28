"use client";

import React, { useState, useEffect, useRef } from "react";
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
} from "@mui/material";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const AddMake = () => {
  const [makes, setMakes] = useState([]);
  const [filteredMakes, setFilteredMakes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editingMake, setEditingMake] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "",
  });

  const [formData, setFormData] = useState({
    make: "",
    image: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchMakes();
  }, []);

  const fetchMakes = async () => {
    try {
      const response = await axios.get("/api/make");
      setMakes(response.data);
      setFilteredMakes(response.data);
    } catch (error) {
      console.error("Error fetching makes:", error);
      setSnackbar({
        open: true,
        message: "Failed to fetch makes.",
        type: "error",
      });
    }
  };

  useEffect(() => {
    let filtered = makes;
    if (searchQuery) {
      filtered = filtered.filter((make) =>
        make.make.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredMakes(filtered);
  }, [searchQuery, makes]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddOpen = () => {
    setFormData({
      make: "",
      image: "",
    });
    setSelectedImage(null);
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

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const uploadImage = async (imageFile) => {
    const base64Image = await convertToBase64(imageFile);
    const response = await fetch(`${process.env.NEXT_PUBLIC_UPLOAD_IMAGE_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: base64Image }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Failed to upload image");
    return result.image_url;
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    if (!formData.make || !selectedImage) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields.",
        type: "error",
      });
      return;
    }
    try {
      const uploadedImageUrl = await uploadImage(selectedImage);
      const dataToSubmit = { ...formData, image: uploadedImageUrl };
      console.log("data to submit :",dataToSubmit);
      await axios.post("/api/make", dataToSubmit);
      setSnackbar({
        open: true,
        message: "Make added successfully.",
        type: "success",
      });
      fetchMakes();
      handleAddClose();
    } catch (error) {
      console.error("Error adding make:", error);
      setSnackbar({
        open: true,
        message: "Failed to add make.",
        type: "error",
      });
    }
  };

  const handleEditOpen = (make) => {
    setEditingMake(make);
    setFormData({ make: make.make, image: make.image });
    setOpenEditDialog(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedImageUrl = selectedImage ? await uploadImage(selectedImage) : formData.image;
      const updatedData = { ...formData, image: updatedImageUrl };
      await axios.put(`/api/make/${editingMake.id}`, updatedData);
      setSnackbar({
        open: true,
        message: "Make updated successfully.",
        type: "success",
      });
      fetchMakes();
      handleEditClose();
    } catch (error) {
      console.error("Error updating make:", error);
      setSnackbar({
        open: true,
        message: "Failed to update make.",
        type: "error",
      });
    }
  };

  const handleEditClose = () => {
    setOpenEditDialog(false);
    setEditingMake(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/make/${id}`);
      setSnackbar({
        open: true,
        message: "Make deleted successfully.",
        type: "warning",
      });
      fetchMakes();
    } catch (error) {
      console.error("Error deleting make:", error);
      setSnackbar({
        open: true,
        message: "Failed to delete make.",
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
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Toolbar>
          <InputBase
            placeholder="Search makes"
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
          Add New Make
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Make</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredMakes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((make, index) => (
              <TableRow key={make.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{make.id}</TableCell>
                <TableCell>{make.make}</TableCell>
                <TableCell>
                  <img src={`${process.env.NEXT_PUBLIC_UPLOADED_IMAGE_URL}/${make.image}`} alt={make.make} style={{ width: 50, height: 50 }} />
                </TableCell>
                <TableCell>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <FaUserEdit onClick={() => handleEditOpen(make)} style={{ fontSize: "20px", color: "#1976d2", cursor: "pointer" }} />
                    <MdDeleteForever onClick={() => handleDelete(make.id)} style={{ fontSize: "20px", color: "#d32f2f", cursor: "pointer" }} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredMakes.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      <Dialog open={openAddDialog} onClose={handleAddClose} maxWidth="md" fullWidth>
        <DialogTitle>
          Add New Make
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
            <TextField
              label="Make"
              name="make"
              value={formData.make}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
            />
            <input
              type="file"
              onChange={handleImageChange}
              ref={fileInputRef}
              accept="image/*"
              style={{ marginTop: "15px" }}
            />
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

      <Dialog open={openEditDialog} onClose={handleEditClose} maxWidth="md" fullWidth>
        <DialogTitle>
          Edit Make
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
            <TextField
              label="Make"
              name="make"
              value={formData.make}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
            />
            <input
              type="file"
              onChange={handleImageChange}
              ref={fileInputRef}
              accept="image/*"
              style={{ marginTop: "15px" }}
            />
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

export default AddMake;
