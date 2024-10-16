import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Typography, Box } from '@mui/material';

const AppointmentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.dob) {
      return;
    }
    onSubmit(formData);  // Trigger the onSubmit callback with form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h2" color="primary" gutterBottom textAlign="center">
        Start Telehealth Session
      </Typography>
      <TextField
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Date of Birth"
        name="dob"
        type="date"
        value={formData.dob}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Reason for Visit (Optional)"
        name="reason"
        value={formData.reason}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={3}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        type="submit"
        sx={{ mt: 2, fontSize: 18, py: 2 }}
      >
        Connect Now
      </Button>
    </form>
  );
};

// Add PropTypes validation for onSubmit
AppointmentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // onSubmit is required and must be a function
};

export default AppointmentForm;
