import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { useState } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';


let theme = createTheme();
theme = responsiveFontSizes(theme);


const InventoryList = ({ userId, inventory, addItem, removeItem, deleteItem }) => {
  const [amount, setAmount] = useState({});

  const handleAmountChange = (name, value) => {
    setAmount((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getValidAmount = (amount) => {
    const parsedAmount = parseInt(amount, 10);
    return isNaN(parsedAmount) ? 1 : parsedAmount;
  };

  return (
    <Stack
      spacing={2}
      overflow="auto"
      sx={{
        backgroundColor: '#1f1f1f',
        borderRadius: 2,
        padding: 2,
        boxShadow: 3,
      }}
      alignItems={'center'}
      
    >
      {inventory.map(({name, quantity }) => (
        <Box
          key={name}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          bgcolor="#333"
          padding={3}
          borderRadius={2}
          boxShadow={2}
          gap={2}

          overflow="auto"
          flexDirection={{
            xs:'column',
            sm:'column',
            md:'row',
            lg:'row'
          }}
        >
            
            <Box display="flex"
              flexDirection={{
                xs:'column',
                sm:'row',
                md:'row',
                lg:'row'
              }}
              gap={2}>


              <Box
              display="flex"
              gap={2}
              
              alignItems={'center'}
              >
                <ThemeProvider theme={theme}>
              
                  <Typography variant="h5" color="white" fontFamily="Roboto, sans-serif">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Typography>
              
                  <Box
                  padding= {.5}
                  border={'black 3px solid'}
                  bgcolor={'white'}>
                  <Typography variant="h5" color="black" fontFamily="Roboto, sans-serif">
                      {quantity}
                  </Typography>
                  </Box>
                </ThemeProvider>
                </Box>
              
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteItem(name, userId)}
                  sx={{ minWidth: '80px' }}
                >
                  Remove Item
                </Button>
            </Box>
              
      
         
          <Stack direction={{
            xs:'column',
            sm:'row',
            md:'row',
            lg:'row'
          }} spacing={2} alignItems="center">


            <TextField
              variant="outlined"
              label="Amount"
              type="number"
              value={amount[name] || ''}
              onChange={(e) => handleAmountChange(name, e.target.value)}
              InputProps={{
                sx: { color: 'white', borderColor: '#90caf9' },
              }}
              InputLabelProps={{
                sx: { color: 'white' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#90caf9',
                  },
                  '&:hover fieldset': {
                    borderColor: '#90caf9',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#90caf9',
                  },
                },
              }}
            />
            <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => removeItem(name, getValidAmount(amount[name]), userId)}
              >
                -
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => addItem(name, getValidAmount(amount[name]), userId)}
              >
                +
              </Button>
            </Box>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default InventoryList;
