import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { useState } from "react";

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
      width="800px"
      height="500px"
      spacing={2}
      overflow="auto"
      sx={{
        backgroundColor: '#1f1f1f',
        borderRadius: 2,
        padding: 2,
        boxShadow: 3,
      }}
    >
      {inventory.map(({ name, quantity }) => (
        <Box
          key={name}
          width="100%"
          minHeight="150px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          bgcolor="#333"
          padding={3}
          borderRadius={2}
          boxShadow={2}
        >
          <Typography variant="h5" color="white" fontFamily="Roboto, sans-serif">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
            <Typography variant="h5" color="white" fontFamily="Roboto, sans-serif">
              {quantity}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => deleteItem(userId, name)}
              sx={{ minWidth: '120px' }}
            >
              Remove Item
            </Button>
          </Box>
          <Stack direction="row" spacing={2} alignItems="center">
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
                onClick={() => removeItem(userId, name, getValidAmount(amount[name]))}
              >
                -
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => addItem(userId, name, getValidAmount(amount[name]))}
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
