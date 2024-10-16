import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";


const ConfirmationPage = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 500); // Change dots every 500ms
    return () => clearInterval(interval);
  }, []);

  return (
      <Box sx={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Your doctor has been notified.
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ marginLeft: 6 }} textAlign="left" >
          Please take a seat and wait for your doctor to connect{dots}
        </Typography>
      </Box>
  );
};

export default ConfirmationPage;
