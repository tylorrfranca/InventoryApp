

import React from 'react';
import { Container, CssBaseline, Box, Button, Typography, createTheme, ThemeProvider } from '@mui/material';
import { useRouter } from 'next/navigation';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function FirstPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/loginpage');
  };

  const handleSignUp = () => {
    router.push('/signuppage');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
          height={'100vh'}

        >

          <Box
            sx={{
            marginTop: 18,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: theme.palette.background.paper,
            padding: 4,
            borderRadius: 2,
          }}
          height={'60%'}
          >
              <Typography component="h1" variant="h3" gutterBottom padding={8}>
                Welcome to Inventory App
              </Typography>
              <Typography component="p" variant="h6" gutterBottom>
                Manage your inventory efficiently and effectively.
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                <Button variant="contained" color="primary" onClick={handleLogin}>
                  Login
                </Button>
                <Button variant="outlined" color="primary" onClick={handleSignUp}>
                  Sign Up
                </Button>
              </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default FirstPage;
