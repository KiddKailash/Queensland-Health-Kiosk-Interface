// TelehealthSession.jsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Layout from './Layout';
import ConfirmationPage from './ConfirmationPage';
import AppointmentForm from './AppointmentForm';

// IMPORTANT NOTE
// Code required

const TelehealthSession = () => {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleSubmit = (formData) => {
    setIsConnecting(true);
    // You can process the form data or trigger other actions here
  };

  return (
    <Layout>
      <Box sx={{ width: '100%' }}>
        {isConnecting ? (
          <ConfirmationPage />
        ) : (
          <AppointmentForm onSubmit={handleSubmit} />
        )}
      </Box>
    </Layout>
  );
};

export default TelehealthSession;
