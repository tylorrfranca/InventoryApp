import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const AddItemModal = ({ open, handleClose, addItem }) => {
  const [itemName, setItemName] = useState('');

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        position={'absolute'}
        top='50%'
        left='50%'
        width={400}
        bgcolor={'white'}
        border='2px solid #000'
        boxShadow={24}
        p={4}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        sx={{
          transform: 'translate(-50%,-50%)'
        }}>
        <Typography variant="h6">
          Add item
        </Typography>
        <Stack width="100%" direction='row' spacing={2}>
          <TextField
            variant="outlined"
            fullWidth
            label="ItemName" 
            type="search"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              addItem(itemName, 1);
              setItemName('');
              handleClose();
            }}>
            Add Item
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddItemModal;