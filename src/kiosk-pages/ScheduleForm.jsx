import React, { useState } from 'react';
import { Button, Typography, TextField, Box } from '@mui/material';
import Layout from './Layout';
import BookingConfirmed from './BookingConfirmed';
import UserSelect from './UserSelect'; // Import the new dropdown component

const ScheduleForm = () => {
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    dob: '',
    date: '', // Field for date
    time: '',
    email: '',
    practitionerType: '', // Field for practitioner type
    comments: '', // Field for comments
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [errors, setErrors] = useState({});
  const [isScheduled, setIsScheduled] = useState(false);

  const availablePractitioners = [
    { value: 'GP', label: 'General Practitioner' },
    { value: 'Specialist', label: 'Specialist' },
    { value: 'Psychologist', label: 'Psychologist' },
  ];

  const availableSlots = {
    GP: [
      { value: '10:00 AM', label: '10:00 AM' },
      { value: '11:00 AM', label: '11:00 AM' },
      { value: '2:00 PM', label: '2:00 PM' },
    ],
    Specialist: [
      { value: '12:00 PM', label: '12:00 PM' },
      { value: '3:00 PM', label: '3:00 PM' },
    ],
    Psychologist: [
      { value: '9:00 AM', label: '9:00 AM' },
      { value: '1:00 PM', label: '1:00 PM' },
      { value: '4:00 PM', label: '4:00 PM' },
    ],
  };

  // Function to handle practitioner type selection
  const handlePractitionerChange = (name, selectedValue) => {
    setAppointmentData((prevData) => ({
      ...prevData,
      practitionerType: selectedValue,
      date: '',  // Reset date when practitioner type changes
      time: '',  // Reset time when practitioner type changes
    }));
    setAvailableTimes([]); // Reset available times when practitioner changes
  };

  // General change handler
  const handleChange = (name, value) => {
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));

    // If practitioner type and date are selected, populate available times
    if (name === 'date' && appointmentData.practitionerType) {
      setAvailableTimes(availableSlots[appointmentData.practitionerType] || []);
    }
  };

  const scheduleAppointment = (e) => {
    e.preventDefault();
    // Validation logic here...
    // Send appointmentData to backend
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
                onChange={(e) => handleChange('name', e.target.value)}
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
                onChange={(e) => handleChange('dob', e.target.value)}
                fullWidth
                required
                margin="normal"
                InputLabelProps={{ shrink: true }}
                error={Boolean(errors.dob)}
                helperText={errors.dob}
              />

              {/* Practitioner Type Selection using UserSelect */}
              <UserSelect
                name="practitionerType"
                text="Select Practitioner Type"
                options={availablePractitioners}
                value={appointmentData.practitionerType}
                onChange={handlePractitionerChange}
              />

              {/* New Date Select Input - Disabled until a practitioner is selected */}
              <TextField
                label="Select Appointment Date"
                name="date"
                type="date"
                value={appointmentData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                fullWidth
                required
                margin="normal"
                InputLabelProps={{ shrink: true }}
                disabled={!appointmentData.practitionerType} // Disabled until practitioner type is selected
                error={Boolean(errors.date)}
                helperText={errors.date}
              />

              {/* Available Times Dropdown using UserSelect */}
              {availableTimes.length > 0 && (
                <UserSelect
                  name="time"
                  text="Select Available Time"
                  options={availableTimes}
                  value={appointmentData.time}
                  onChange={handleChange}
                  disabled={!appointmentData.date} // Disabled until appointment date is selected
                />
              )}

              <TextField
                label="Contact Email"
                name="email"
                type="email"
                value={appointmentData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                fullWidth
                required
                margin="normal"
                error={Boolean(errors.email)}
                helperText={errors.email}
              />

              {/* Comments Input */}
              <TextField
                label="Comments (Optional)"
                name="comments"
                value={appointmentData.comments}
                onChange={(e) => handleChange('comments', e.target.value)}
                fullWidth
                margin="normal"
                multiline
                rows={3}
                placeholder="Any additional details you'd like to share?"
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
