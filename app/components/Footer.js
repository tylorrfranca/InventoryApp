import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: '#1f1f1f',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'white',
          padding: 3,
          boxShadow: 3,
          borderTop: '2px solid #333',
        }}
        height={'10vh'}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          fontFamily="Roboto, sans-serif"
        >
          Created by{' '}
          <Link
            href="https://tylorrfranca.github.io/PersonalSite/"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
            sx={{
              "&:hover": {
                color: '#90caf9',
              }
            }}
          >
            Tylor França
          </Link>
        </Typography>

        <Typography
          variant="h5"
          fontWeight="bold"
          fontFamily="Roboto, sans-serif"
        >
          Simple Inventory Tracking Application
        </Typography>

        <Box display="flex" flexDirection="row" gap={3}>
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
    </footer>
  );
}

export default Footer;
