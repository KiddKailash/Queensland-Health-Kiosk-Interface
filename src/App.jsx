import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import HomePage from "./pages/HomePage/HomePage";
import TelehealthSession from "./pages/AttendTelehealthSession/TelehealthSession";
import ScheduleForm from "./pages/BookTelehealthSession/BookSession";
import HelpSupport from "./pages/HelpAndSupport/HelpSupport";
import PageNotFound from './pages/PageNotFound/PageNotFound';
import theme from "./utils/theme";

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
