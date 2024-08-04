import { collection, getDocs, query, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from '@/firebase';

export const updateInventory = async (setInventory) => {
  const snapshot = query(collection(firestore, 'inventory'));
  const docs = await getDocs(snapshot);
  const inventoryList = [];
  docs.forEach((doc) => {
    inventoryList.push({
      name: doc.id,
      ...doc.data(),
    });
  });
  setInventory(inventoryList);
};


export const addItem = async (item, amount, updateInventory) => {
  const docRef = doc(collection(firestore, 'inventory'), item);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const { quantity } = docSnap.data();
    await setDoc(docRef, { quantity: quantity + amount });
  } else {
    await setDoc(docRef, { quantity: amount });
  }
  await updateInventory();
};

export const removeItem = async (item, amount, updateInventory) => {
  const docRef = doc(collection(firestore, 'inventory'), item);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const { quantity } = docSnap.data();
    if (quantity === 1) {
      await deleteDoc(docRef);
    } else {
      await setDoc(docRef, { quantity: quantity - amount });
    }
  }
  await updateInventory();
};

export const deleteItem = async (item, updateInventory) => {
  const docRef = doc(collection(firestore, 'inventory'), item);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
      await deleteDoc(docRef);
    } 
  await updateInventory();
};