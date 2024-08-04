import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const AddItemModal = ({ open, handleClose, addItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemAmount, setItemAmount] = useState('');
  const amount = parseInt(itemAmount, 10);


  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        width={400}
        bgcolor="#1f1f1f"
        color="white"
        border="2px solid #333"
        boxShadow={24}
        p={4}
        display="flex"
        flexDirection="column"
        gap={3}
        sx={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography variant="h6" color="primary">
          Add Item
        </Typography>
        <Stack width="100%" spacing={2}>
          <TextField
            variant="outlined"
            fullWidth
            label="Item Name"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
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
            <TextField
            variant="outlined"
            fullWidth
            label="Amount"
            type="number"
            value={itemAmount}
            onChange={(e) => setItemAmount(e.target.value)}
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
          <Button
            variant="contained"
            onClick={() => {
              if(itemAmount===('')){
                addItem(itemName, 1);
                setItemName('');
                handleClose();
              }
              else{
                addItem(itemName, amount);
                setItemName('');
                handleClose();
              }
            }}>
            Add Item
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddItemModal;