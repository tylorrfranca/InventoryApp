'use client';
import { useState, useEffect } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import AddItemModal from '../components/AddItemModal';
import InventoryList from '../components/InventoryList';
import { updateInventory, addItem, removeItem, deleteItem } from '../components/FirebaseFunctions';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const HomePage = () => {
  const [inventory, setInventory] = useState([]);
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      updateInventory(user.uid, setInventory);
    }
  }, [user]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log({ user });

  return (
    <Box
      width="100vw"
      height="80vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="#121212"
      position="relative"
    >
      <Container maxWidth="md">
        <Box
          bgcolor="#1f1f1f"
          borderRadius={3}
          p={3}
          mb={4}
          boxShadow={3}
          textAlign="center"
        >
          <Typography variant="h2" color="primary" fontFamily="Roboto, sans-serif">
            Inventory Items
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" mb={3}>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            ADD NEW ITEM
          </Button>
        </Box>

        <Box
          border="1px solid #333"
          borderRadius={3}
          bgcolor="#1f1f1f"
          p={3}
          boxShadow={3}
        >
          <InventoryList
            userId={user?.uid}
            inventory={inventory}
            addItem={(item, amount) => addItem(item, amount, user.uid, () => updateInventory(user.uid, setInventory))}
            removeItem={(item, amount) => removeItem(item, amount, user.uid, () => updateInventory(user.uid, setInventory))}
            deleteItem={(item) => deleteItem(item, user.uid, () => updateInventory(user.uid, setInventory))}
          />
        </Box>

        <AddItemModal
          userId={user?.uid}
          open={open}
          handleClose={handleClose}
          addItem={(item, amount) => addItem(item, amount, user.uid, () => updateInventory(user.uid, setInventory))}
        />
      </Container>

      <Button
        variant="contained"
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          backgroundColor: 'red',
          '&:hover': {
            backgroundColor: 'darkred',
          },
        }}
        onClick={() => {
          signOut(auth)
        }}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default HomePage;
