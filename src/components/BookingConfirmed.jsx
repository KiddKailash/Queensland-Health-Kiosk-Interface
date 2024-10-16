// client/src/components/BookingConfirmed.jsx
import React from "react";
import { Typography, Box } from "@mui/material";
import Layout from "./Layout";

const BookingConfirmed = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Booking Confirmed!
      </Typography>
      <Typography variant="body1">
        Thank you for scheduling an appointment. A confirmation email has been
        sent to your email address.
      </Typography>
    </Box>
  );
};

export default BookingConfirmed;