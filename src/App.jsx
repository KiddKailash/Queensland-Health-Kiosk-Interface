import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import HomePage from "./components/HomePage/HomePage";
import TelehealthSession from "./components/AttendTelehealthSession/TelehealthSession";
import ScheduleForm from "./components/BookTelehealthSession/BookSession";
import HelpSupport from "./components/HelpAndSupport/HelpSupport";
import PageNotFound from './components/PageNotFound/PageNotFound';
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
