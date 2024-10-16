// ScheduleForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Typography, TextField, Box } from '@mui/material';
import Layout from './Layout'; // Import your Layout component if you have one
import BookingConfirmed from './BookingConfirmed'; // Import your confirmation component

// NOTE
// Change to available spots

const ScheduleForm = () => {
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    dob: '',
    date: '',
    time: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [isScheduled, setIsScheduled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const sendEmail = () => {
    axios
      .post('http://localhost:5001/send-email', appointmentData)
      .then((response) => {
        console.log('Email sent successfully:', response.data);
        setIsScheduled(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle error appropriately
        setErrors((prevErrors) => ({
          ...prevErrors,
          submit: 'There was an error sending your appointment request. Please try again later.',
        }));
      });
  };

  const scheduleAppointment = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!appointmentData.name) newErrors.name = 'Full Name is required';
    if (!appointmentData.dob) newErrors.dob = 'Date of Birth is required';
    if (!appointmentData.date) newErrors.date = 'Preferred Date is required';
    if (!appointmentData.time) newErrors.time = 'Preferred Time is required';
    if (!appointmentData.email) newErrors.email = 'Contact Email is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      sendEmail(); // Send data to backend when valid
    }
  };

  return (
    <Layout>
      <Box sx={{ width: '100%' }}>
        {isScheduled ? (
          <BookingConfirmed />
        ) : (
          <Box>
            <Typography variant="h4" color="primary" gutterBottom textAlign="center">
              Schedule an Appointment
            </Typography>
            <form onSubmit={scheduleAppointment} noValidate>
              <TextField
                label="Full Name"
                name="name"
                value={appointmentData.name}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                error={Boolean(errors.name)}
                helperText={errors.name}
              />
              <TextField
                label="Date of Birth"
                name="dob"
                type="date"
                value={appointmentData.dob}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                InputLabelProps={{ shrink: true }}
                error={Boolean(errors.dob)}
                helperText={errors.dob}
              />
              <TextField
                label="Preferred Date"
                name="date"
                type="date"
                value={appointmentData.date}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                InputLabelProps={{ shrink: true }}
                error={Boolean(errors.date)}
                helperText={errors.date}
              />
              <TextField
                label="Preferred Time"
                name="time"
                type="time"
                value={appointmentData.time}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                InputLabelProps={{ shrink: true }}
                error={Boolean(errors.time)}
                helperText={errors.time}
              />
              <TextField
                label="Contact Email"
                name="email"
                type="email"
                value={appointmentData.email}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
              {errors.submit && (
                <Typography color="error" variant="body2">
                  {errors.submit}
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ mt: 2, fontSize: 18, py: 2 }}
              >
                Schedule Appointment
              </Button>
            </form>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default ScheduleForm;
