import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Typography, Box, Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BookingConfirmed = ({ appointmentData }) => {
  const navigate = useNavigate();
  const [sessionCode, setSessionCode] = useState("");

  useEffect(() => {
    // Generate random session code in format xxxx-xxxx-xxxx
    const generateSessionCode = () => {
      const segment = () =>
        Math.random().toString(36).substring(2, 6).toUpperCase();
      return `${segment()}-${segment()}-${segment()}`;
    };
    const code = generateSessionCode();
    setSessionCode(code);

    // Simulate sending a letter with the session code to the user's address
    console.log(
      `A letter with session code ${code} will be sent to ${appointmentData.address}`
    );
  }, [appointmentData.address]);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px", // Limit max width for readability
        margin: "0 auto",
        mt: 3,
        px: 2, // Padding for smaller screens
      }}
    >
      <Typography
        variant="h4"
        color="primary"
        sx={{ textAlign: "center", mb: 2, fontWeight: "bold" }}
      >
        Booking Confirmed!
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Thank you, {appointmentData.name}, for scheduling your appointment.
      </Typography>

      <Box
        sx={{
          backgroundColor: "#e8f4fc",
          p: 2,
          borderRadius: 2,
          mb: 3,
          boxShadow: "inset 0 0 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Your session access code is:</strong>
        </Typography>

        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "primary.main", mb: 1 }}
        >
          {sessionCode}
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ mb: 1 }}>
        Your appointment with a {appointmentData.practitionerType} is scheduled
        for: {appointmentData.date} at {appointmentData.time}. A letter
        containing this information will be sent to:{" "}
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        <strong>{appointmentData.address}</strong>
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Please bring this session access code with you to the kiosk on the day
        of your appointment.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        sx={{ fontSize: 18, py: 2 }}
        fullWidth
      >
        Back to Home Screen
      </Button>
    </Box>
  );
};

// PropTypes validation for appointmentData prop
BookingConfirmed.propTypes = {
  appointmentData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    practitionerType: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    comments: PropTypes.string,
  }).isRequired, // Ensure appointmentData is passed and follows the shape defined
};

export default BookingConfirmed;
