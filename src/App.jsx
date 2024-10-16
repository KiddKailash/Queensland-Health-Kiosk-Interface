import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import HomePage from "./kiosk-pages/HomePage";
import TelehealthSession from "./kiosk-pages/TelehealthSession";
import ScheduleForm from "./kiosk-pages/ScheduleForm";
import HelpSupport from "./kiosk-pages/HelpSupport";
import PageNotFound from './kiosk-pages/PageNotFound';
import theme from "./utils/theme";  // Import the theme from the new file

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/telehealth-session" element={<TelehealthSession />} />
          <Route path="/schedule-appointment" element={<ScheduleForm />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
