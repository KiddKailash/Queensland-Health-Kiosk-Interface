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

          {/* Section: What is Telehealth */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="telehealth-content"
              id="telehealth-header"
            >
              <Typography variant="h5" color="primary">
                What is Telehealth?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.primary">
                Telehealth is like a face-to-face appointment, but you will see
                and hear your health professional via a video screen. It is a
                convenient way to connect with healthcare professionals without
                needing to travel.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Section: Why Choose Telehealth */}
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="why-telehealth-content"
              id="why-telehealth-header"
            >
              <Typography variant="h5" color="primary">
                Why Should I Choose Telehealth?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemText primary="Get care more easily without traveling far." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Spend less time away from work or other activities." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Keep your appointment if you're sick or need to isolate." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Invite a family member or friend to join your appointment." />
                </ListItem>
              </List>
              <Typography variant="body1" color="text.primary">
                Telehealth appointments are secure, and your information is
                safe.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Section: How to Use Telehealth */}
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="how-to-use-content"
              id="how-to-use-header"
            >
              <Typography variant="h5" color="primary">
                How to Use Telehealth
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.primary" gutterBottom>
                To use telehealth, you will need:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="A computer, tablet, or smartphone with a camera." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Internet or Wi-Fi connection." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="A headset or speakers." />
                </ListItem>
              </List>
              <Typography variant="body1" color="text.primary">
                If you are at home, make sure your device is charged and you are
                in a quiet, safe place. You can also test telehealth on your
                device by making a test call to check if your video and sound
                are working.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Section: How to Prepare for a Telehealth Appointment */}
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="prepare-content"
              id="prepare-header"
            >
              <Typography variant="h5" color="primary">
                How to Prepare for a Telehealth Appointment
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemText primary="Have a list of your medicines or any test results with you." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Write down any questions you want to ask during the appointment." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Section: Need Assistance */}
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="assistance-content"
              id="assistance-header"
            >
              <Typography variant="h5" color="primary">
                Need Assistance?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.primary">
                If you need assistance with telehealth, press the{" "}
                <strong>Call for Help</strong> button below or contact the
                Telehealth Helpdesk at <a href="tel:1800066888">1800 066 888</a>{" "}
                for technical support.
              </Typography>
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
