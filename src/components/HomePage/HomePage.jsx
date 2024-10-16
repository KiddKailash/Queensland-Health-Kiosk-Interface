// HomePage.jsx
import React from "react";
import { Divider, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h1" color="primary" sx={{ fontWeight: "normal" }}>
          Welcome to the
        </Typography>
        <Typography variant="h1" color="primary" gutterBottom>
          Telehealth Kiosk
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          color="text.primary"
          sx={{ mb: 2 }}
        >
          Access healthcare services easily and conveniently.
        </Typography>
        <Divider sx={{ mb: 3, width: "80%", ml: "auto", mr: "auto" }} />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate("/schedule-appointment")}
          sx={{ mb: 2, fontSize: 18, py: 2 }}
        >
          Schedule an Appointment
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate("/telehealth-session")}
          sx={{ mb: 2, fontSize: 18, py: 2 }}
        >
          Start Telehealth Session
        </Button>

        <Button
          variant="outlined"
          color="primary"
          fullWidth
          onClick={() => navigate("/help-support")}
          sx={{ fontSize: 18, py: 2 }}
        >
          Help and Support
        </Button>
      </Box>
    </Layout>
  );
};

export default HomePage;
