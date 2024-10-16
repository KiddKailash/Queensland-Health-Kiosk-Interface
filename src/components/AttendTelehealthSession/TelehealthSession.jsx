import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import Layout from '../Layout';
import ConfirmationPage from './WaitingPage';

const TelehealthSession = () => {
  const [sessionCode, setSessionCode] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sessionCode) {
      setError('Please enter your session code.');
      return;
    }
    // Normally you would validate the code here
    setIsConnecting(true); // Simulate the connection process
  };

  return (
    <Layout>
      <Box sx={{ width: '100%' }}>
        {isConnecting ? (
          <ConfirmationPage />
        ) : (
          <Box>
            <Typography variant="h4" color="primary" gutterBottom textAlign="center">
              Enter Telehealth Session Code
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
              <TextField
                label="Session Code"
                name="sessionCode"
                value={sessionCode}
                onChange={(e) => setSessionCode(e.target.value)}
                fullWidth
                required
                margin="normal"
                error={Boolean(error)}
                helperText={error}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ mt: 2, fontSize: 18, py: 2 }}
              >
                Connect to Session
              </Button>
            </form>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default TelehealthSession;
