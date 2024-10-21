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
        color: "background.default",
        padding: { xs: 1, sm: 2 },
        height: { xs: 80, sm: 100 },
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        boxShadow: 3, // Adds subtle shadow
      }}
    >
      {/* Logo Placeholder
      <Box 
        component="img"
        src="/assets/qgov.png"
        alt="Queensland Government Logo"
        sx={{
          height: { xs: 40, sm: 50 },
          marginRight: 2,

        }}
      /> */}

      <Typography
        variant="h5"
        component="div"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font size
          whiteSpace: "nowrap",
          marginRight: 'auto',
          marginLeft: 4
        }}
      >
        *Health Provider Logo* | Telehealth Kiosk
      </Typography>

      {/* Conditionally display the Back button when not on the home page */}
      {location.pathname !== '/' && (
        <Button
          variant="outlined" // QGov buttons are usually outlined for secondary actions
          onClick={() => navigate("/")}
          startIcon={<ArrowBackIcon />} // Adds the back icon
          sx={{
            backgroundColor: "background.default", // QGov often uses a white background for outlined buttons
            color: "primary.main", // Use the primary color (sapphire blue) for text and borders
            fontWeight: 'bold',
            paddingX: { xs: 2, sm: 3 },
            paddingY: { xs: 1, sm: 1.5 },
            fontSize: { xs: "0.9rem", sm: "1rem" },
            marginRight: 4,
            borderRadius: "4px", // Slight rounding for modern, accessible design
            borderColor: "primary.main", // Sapphire blue border
            textDecoration: "none", // Ensure no text decoration
            "&:hover": {
              backgroundColor: "#FFFFFF", // Light blue hover background for outlined buttons
              borderColor: "primary.main", // Darker blue on hover
            },
            "&:focus": {
              outline: `2px solid #FAD02C}`, // Golden yellow focus outline for accessibility
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
