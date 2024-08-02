'use client'
import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import AddItemModal from "./../AddItemModal"
import InventoryList from './../InventoryList';
import { updateInventory, addItem, removeItem, deleteItem} from './../FirebaseFunctions';

const HomePage = () => {
  const [inventory, setInventory] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    updateInventory(setInventory);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      width="100vw"
      height={'94vh'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={6}
      bgcolor={"black"}>
      <Box
        width={'800px'}
        height={'100px'}
        bgcolor={"#4184f0"}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={3}
        
      >
      <Typography variant="h2" color={"black"} fontFamily={'mateSC'} >
        Inventory Items
      </Typography>
        </Box>       
      <AddItemModal open={open} handleClose={handleClose} addItem={(item, amount) => addItem(item, amount, () => updateInventory(setInventory))} />
      <Box border={'1px solid #333'}
      borderRadius={3}
      bgcolor={'#666c75'}
      padding={5}>
        <InventoryList inventory={inventory} 
        addItem={(item, amount) => addItem(item, amount, () => updateInventory(setInventory))} 
        removeItem={(item, amount) => removeItem(item, amount, () => updateInventory(setInventory))} 
        deleteItem={(item) => deleteItem(item, () => updateInventory(setInventory))}/>
      </Box>
      <Button variant="contained" onClick={handleOpen} >ADD NEW ITEM</Button>
    </Box>
  );
}

export default HomePage;