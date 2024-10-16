// Layout.jsx (Updated)
import React from "react";
import PropTypes from "prop-types";
import { Box, Card, CardContent } from "@mui/material";
import Header from "./Header";

const Layout = ({ children }) => (
  <Box
    sx={{
      width: "100vw" /* Ensures the layout spans the full width */,
      minHeight: "100vh" /* Ensures it spans the full height */,
      display: "flex",
      flexDirection: "column",
      backgroundColor: "background.default",
    }}
  >
    <Header />
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Card sx={{ maxWidth: 550, width: "100%" }}>
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  </Box>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
