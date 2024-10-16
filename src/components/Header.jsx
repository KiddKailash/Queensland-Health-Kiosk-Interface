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
        | Telehealth Kiosk
      </Typography>

      {/* Conditionally display the Back button when not on the home page */}
      {location.pathname !== '/' && (
        <Button
          variant="outlined" // QGov buttons are usually outlined for secondary actions
          onClick={() => navigate("/")}
          startIcon={<ArrowBackIcon />} // Adds the back icon
          sx={{
            backgroundColor: "#FFFFFF", // QGov often uses a white background for outlined buttons
            color: "#09549F", // Use the primary color (sapphire blue) for text and borders
            fontWeight: 'bold',
            textTransform: 'none',
            paddingX: { xs: 2, sm: 3 },
            paddingY: { xs: 1, sm: 1.5 },
            fontSize: { xs: "0.9rem", sm: "1rem" },
            borderRadius: "4px", // Slight rounding for modern, accessible design
            borderColor: "#09549F", // Sapphire blue border
            textDecoration: "none", // Ensure no text decoration
            "&:hover": {
              backgroundColor: "#F0F4F9", // Light blue hover background for outlined buttons
              borderColor: "#05325F", // Darker blue on hover
              textDecoration: "none", // Disable underline on hover
            },
            "&:focus": {
              outline: "2px solid #FFCC2C", // Golden yellow focus outline for accessibility
              textDecoration: "none", // Disable underline on focus
            }
          }}
        >
          Home Screen
        </Button>
      )}
    </Box>
  );
};

export default Header;
