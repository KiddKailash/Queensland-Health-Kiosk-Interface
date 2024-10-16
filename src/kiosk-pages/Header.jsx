// Header.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "#FFFFFF",
        padding: 2,
        height: 100, 
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Logo Placeholder */}
      <img
        src="/assets/qgov.png"
        alt="Queensland Government Logo"
        style={{ height: 50, marginRight: 8 }}
      />

      <Typography
        variant="h5"
        component="div"
        sx={{ fontWeight: "bold" }}
      >
        | TeleHealth Kiosk
      </Typography>

      {/* Spacer to push the button to the right */}
      <Box sx={{ flexGrow: 1 }} />

      <Button
        variant="contained"
        color="warning"
        onClick={() => navigate("/")}
        sx={{ 
          fontWeight: 'bold',
          textTransform: 'none',
          paddingX: 3,
          paddingY: 1,
        }}
      >
        Back
      </Button>
    </Box>
  );
};

export default Header;
