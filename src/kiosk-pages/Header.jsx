import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import back arrow icon

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "#FFFFFF",
        padding: { xs: 1, sm: 2 },
        height: { xs: 80, sm: 100 },
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        boxShadow: 3, // Adds subtle shadow
        borderBottom: 2, // Adds a bottom border for separation
        borderColor: "secondary.main",
      }}
    >
      {/* Logo Placeholder with Hover Effect */}
      <Box 
        component="img"
        src="/assets/qgov.png"
        alt="Queensland Government Logo"
        sx={{
          height: { xs: 40, sm: 50 },
          marginRight: 2,
          cursor: "pointer",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          }
        }}
      />

      <Typography
        variant="h5"
        component="div"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font size
          whiteSpace: "nowrap",
          marginRight: 'auto'
        }}
      >
        | TeleHealth Kiosk
      </Typography>

      {/* Conditionally display the Back button when not on the home page */}
      {location.pathname !== '/' && (
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          startIcon={<ArrowBackIcon />} // Adds the back icon
          sx={{
            background: "linear-gradient(to right, #ff9800, #ff5722)", // Gradient background
            color: "#fff",
            fontWeight: 'bold',
            textTransform: 'none',
            paddingX: { xs: 2, sm: 3 },
            paddingY: { xs: 0.5, sm: 1 },
            fontSize: { xs: "0.8rem", sm: "1rem" },
            borderRadius: "20px", // More rounded button
            transition: "all 0.3s ease",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
            "&:hover": {
              background: "linear-gradient(to right, #ff5722, #f44336)", // Darken on hover
              transform: "scale(1.05)", // Slightly enlarge on hover
              boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
            },
            "&:focus": {
              outline: "none",
              boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.4)", // More pronounced shadow on focus
            }
          }}
        >
          Back
        </Button>
      )}
    </Box>
  );
};

export default Header;
