'use client'
import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';


let theme = createTheme();
theme = responsiveFontSizes(theme); 


const Header = () => {

  return (
    <header>
      <Box
        sx={{
          backgroundColor: '#1f1f1f',
          width: '100vw',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'white',
          padding: 3,
          boxShadow: 3,
          borderBottom: '2px solid #333',
        }}
        height={{
          sm:'12vh',
          md:'11vh',
          lg:'10vh'
        }}
      >
        <ThemeProvider theme={theme}>
        <Typography
          variant="h4"
          fontFamily="Roboto, sans-serif"
          fontWeight="bold"
          sx={{
            color: '#90caf9',
          }}
        >
          <Link href= '/'
          underline='none'>
          Simple Inventory Tracking Application
          </Link>
        </Typography>
        </ThemeProvider>
        <Box display="flex" flexDirection="row" gap={3} marginX={3}>
          <Link href="https://github.com/tylorrfranca" target="_blank" rel="noopener" underline="none">
            <GitHubIcon
              fontSize="large"
              sx={{
                cursor: 'pointer',
                transition: 'transform 0.2s',
                "&:hover": {
                  transform: 'scale(1.2)',
                  color: '#90caf9',
                }
              }}
            />
          </Link>

          <Link href="https://www.linkedin.com/in/tylorfrancapires-949254179/" target="_blank" rel="noopener" underline="none">
            <LinkedInIcon
              fontSize="large"
              sx={{
                cursor: 'pointer',
                transition: 'transform 0.2s',
                "&:hover": {
                  transform: 'scale(1.2)',
                  color: '#90caf9',
                }
              }}
            />
          </Link>
        </Box>
      </Box>
    </header>
  );
}

export default Header;
