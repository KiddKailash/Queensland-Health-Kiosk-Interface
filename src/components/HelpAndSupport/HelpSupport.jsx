import React from "react";
import {
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

const HelpSupport = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Box sx={{ maxWidth: 800 }}>
          <Typography
            variant="h2"
            color="primary"
            gutterBottom
            textAlign="center"
          >
            Help and Support
          </Typography>

          {/* Section: What is the TeleHealth Kiosk */}
          <Accordion
            sx={{
              marginBottom: 2,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: "#FFFFFF" }} />}
              aria-controls="telehealth-kiosk-content"
              id="telehealth-kiosk-header"
              sx={{
                backgroundColor: "primary.main",
                color: "#FFFFFF",
                "&.Mui-expanded": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              <Typography variant="h5">
                What is the TeleHealth Kiosk?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#F9F9F9" }}>
              <Typography variant="body1" color="text.primary">
                The TeleHealth Kiosk allows rural residents to access healthcare
                via video consultations. You do not need internet or a
                device—just visit the kiosk to book or join a telehealth
                session.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Section: How to Use the TeleHealth Kiosk */}
          <Accordion
            sx={{
              marginBottom: 2,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: "#FFFFFF" }} />}
              aria-controls="how-to-use-content"
              id="how-to-use-header"
              sx={{
                backgroundColor: "primary.main",
                color: "#FFFFFF",
                "&.Mui-expanded": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              <Typography variant="h5">How Do I Use the Kiosk?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#F9F9F9" }}>
              <Typography variant="body1" color="text.primary">
                Follow these steps to use the TeleHealth Kiosk:
              </Typography>
              <List disablePadding sx={{ mt: 1 }}>
                {[
                  "1. Follow the on-screen instructions at the kiosk.",
                  "2. Book an appointment or enter your session code to start.",
                  "3. Be on time for your appointment.",
                  "4. The system will connect you when your doctor is ready.",
                  "5. Request an email summary after the session if needed.",
                ].map((text, index) => (
                  <ListItem
                    key={index}
                    sx={{ alignItems: "flex-start", py: 0 }}
                  >
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Section: Why Use the Kiosk? */}
          <Accordion
            sx={{
              marginBottom: 2,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: "#FFFFFF" }} />}
              aria-controls="why-use-kiosk-content"
              id="why-use-kiosk-header"
              sx={{
                backgroundColor: "primary.main",
                color: "#FFFFFF",
                "&.Mui-expanded": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              <Typography variant="h5">Why Use the Kiosk?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#F9F9F9" }}>
              <Typography variant="body1" color="text.primary">
                Here are the main reasons to use the TeleHealth Kiosk:
              </Typography>
              <List disablePadding sx={{ mt: 1 }}>
                {[
                  "• No need for internet or a device at home.",
                  "• Avoid long travel to healthcare providers.",
                  "• Private, easy-to-use setup for consultations.",
                  "• Ideal for routine check-ups or specialist appointments.",
                ].map((text, index) => (
                  <ListItem
                    key={index}
                    sx={{ alignItems: "flex-start", py: 0 }}
                  >
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Section: Preparing for Your Appointment */}
          <Accordion
            sx={{
              marginBottom: 2,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: "#FFFFFF" }} />}
              aria-controls="prepare-appointment-content"
              id="prepare-appointment-header"
              sx={{
                backgroundColor: "primary.main",
                color: "#FFFFFF",
                "&.Mui-expanded": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              <Typography variant="h5">
                How to Prepare for Your Appointment
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#F9F9F9" }}>
              <Typography variant="body1" color="text.primary">
                Before your telehealth session, make sure to:
              </Typography>
              <List disablePadding sx={{ mt: 1 }}>
                {[
                  "• Write down any questions for your doctor.",
                  "• Bring a list of medications or test results.",
                  "• Have your session code ready (emailed to you when booked).",
                ].map((text, index) => (
                  <ListItem
                    key={index}
                    sx={{ alignItems: "flex-start", py: 0 }}
                  >
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Section: Need Help? */}
          <Accordion
            sx={{
              marginBottom: 2,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: "#FFFFFF" }} />}
              aria-controls="getting-help-content"
              id="getting-help-header"
              sx={{
                backgroundColor: "primary.main",
                color: "#FFFFFF",
                "&.Mui-expanded": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              <Typography variant="h5">Need Help?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#F9F9F9" }}>
              <Typography variant="body1" color="text.primary">
                If you need assistance, here are your options:
              </Typography>
              <List disablePadding sx={{ mt: 1 }}>
                {[
                  "• Press the 'Call for Help' button on the kiosk screen.",
                  "• Speak to on-site staff for assistance.",
                  "• Call the TeleHealth Helpdesk at 1800 066 888.",
                ].map((text, index) => (
                  <ListItem
                    key={index}
                    sx={{ alignItems: "flex-start", py: 0 }}
                  >
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Layout>
  );
};

export default HelpSupport;
