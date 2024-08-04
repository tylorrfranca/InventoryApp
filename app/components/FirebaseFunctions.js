// FirebaseFunctions.js
import { collection, getDocs, query, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from '@/firebase';

export const updateInventory = async (setInventory, userId) => {
  const snapshot = query(collection(firestore, `users/${userId}/inventory`));
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

export const addItem = async (userId, item, amount, updateInventory) => {
  const docRef = doc(collection(firestore, `users/${userId}/inventory`), item);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const { quantity } = docSnap.data();
    await setDoc(docRef, { quantity: quantity + amount });
  } else {
    await setDoc(docRef, { quantity: amount });
  }
  await updateInventory(userId);
};

export const removeItem = async (userId, item, amount, updateInventory) => {
  const docRef = doc(collection(firestore, `users/${userId}/inventory`), item);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const { quantity } = docSnap.data();
    if (quantity === amount) {
      await deleteDoc(docRef);
    } else {
      await setDoc(docRef, { quantity: quantity - amount });
    }
  }
  await updateInventory(userId);
};

export const deleteItem = async (userId, item, updateInventory) => {
  const docRef = doc(collection(firestore, `users/${userId}/inventory`), item);
  await deleteDoc(docRef);
  await updateInventory(userId);
};
