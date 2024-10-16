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
import Layout from "./Layout";

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
        <Box>
          <Typography
            variant="h2"
            color="primary"
            gutterBottom
            textAlign="center"
          >
            Help and Support
          </Typography>

          {/* Section: What is the TeleHealth Kiosk */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="telehealth-kiosk-content"
              id="telehealth-kiosk-header"
            >
              <Typography variant="h5" color="primary">
                What is the TeleHealth Kiosk?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.primary">
                The TeleHealth Kiosk allows rural residents to access healthcare via video consultations. You do not need internet or a device—just visit the kiosk to book or join a telehealth session.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Section: How to Use the TeleHealth Kiosk */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="how-to-use-content"
              id="how-to-use-header"
            >
              <Typography variant="h5" color="primary">
                How Do I Use the Kiosk?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
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
                  <ListItem key={index} sx={{ alignItems: "flex-start", py: 0 }}>
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="why-telehealth-kiosk-content"
              id="why-telehealth-kiosk-header"
            >
              <Typography variant="h5" color="primary">
                Why Use the Kiosk?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
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
                  <ListItem key={index} sx={{ alignItems: "flex-start", py: 0 }}>
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="prepare-appointment-content"
              id="prepare-appointment-header"
            >
              <Typography variant="h5" color="primary">
                How to Prepare for Your Appointment
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.primary">
                Before your telehealth session, make sure to:
              </Typography>
              <List disablePadding sx={{ mt: 1 }}>
                {[
                  "• Write down any questions for your doctor.",
                  "• Bring a list of medications or test results.",
                  "• Have your session code ready (emailed to you when booked).",
                ].map((text, index) => (
                  <ListItem key={index} sx={{ alignItems: "flex-start", py: 0 }}>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Section: Getting Help */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="getting-help-content"
              id="getting-help-header"
            >
              <Typography variant="h5" color="primary">
                Need Help?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.primary">
                If you need assistance, here are your options:
              </Typography>
              <List disablePadding sx={{ mt: 1 }}>
                {[
                  "• Press the 'Call for Help' button on the kiosk screen.",
                  "• Speak to on-site staff for assistance.",
                  "• Call the TeleHealth Helpdesk at 1800 066 888.",
                ].map((text, index) => (
                  <ListItem key={index} sx={{ alignItems: "flex-start", py: 0 }}>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{ variant: "body1" }}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              gap: 2,
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => {
                // Logic to call for assistance
              }}
              sx={{ fontSize: 18, py: 2 }}
            >
              Call for Help
            </Button>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={() => navigate("/")}
              sx={{ fontSize: 18, py: 2 }}
            >
              Back to Home
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default HelpSupport;
