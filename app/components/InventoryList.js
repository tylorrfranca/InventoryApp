// InventoryList.js
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { deleteItem,updateInventory } from "./FirebaseFunctions";




const InventoryList = ({ inventory, addItem, removeItem, deleteItem}) => {
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
      width={'800px'}
      height={"500px"}
      spacing={2}
      overflow={"auto"}
      
    >
      {inventory.map(({ name, quantity }) => (
        
        <Box
          key={name}
          width='95%'
          minHeight={"150px"}
          display={"flex"}
          alignItems={'center'}
          justifyContent={'space-between'}
          bgcolor="#f0f0f0"
          padding={5}
          borderRadius={10}
          
          >
          <Typography variant='h3' color={'#333'} textAlign={'center'} fontFamily={'mateSC'}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
          <Box display={"flex"} alignItems={'center'} justifyContent={'center'} flexDirection={'row'} gap={2}>
            <Typography variant='h3' color={'#333'} textAlign={'center'} fontFamily={'mateSC'}>{quantity}</Typography>
            <Button variant="contained" onClick={() => deleteItem(name)}>REMOVE ITEM</Button>
          </Box>
          <Stack direction={'row'} spacing={2}>
        <Box>

        </Box>
          <Box
            display={"flex"}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}
            gap={2}
          >
              <TextField
                 variant="outlined"
                 label="Amount"
                 type="number"
                 value={amount[name] || ''}
                 onChange={(e) => handleAmountChange(name, e.target.value)}
              />
                <Box
                display={"flex"}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'row'}
                gap={2}>

                    <Button variant="contained" onClick={() => removeItem(name, getValidAmount(amount[name]))}>-</Button>
                    <Button variant="contained" onClick={() => addItem(name, getValidAmount(amount[name]))}>+</Button>
                    
                </Box>
          </Box>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default InventoryList;