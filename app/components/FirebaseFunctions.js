import { collection, getDocs, query, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from '@/firebase';



export const updateInventory = async (userId, setInventory) => {
  if (!userId) {
    throw new Error("User ID is required to update inventory.");
  }

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

export const addItem = async (item, amount, userId, updateInventory) => {
  if (!userId) {
    throw new Error("User ID is required to add item.");
  }

  const docRef = doc(collection(firestore, `users/${userId}/inventory`), item);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const { quantity } = docSnap.data();
    await setDoc(docRef, { quantity: quantity + amount }, { merge: true });
  } else {
    await setDoc(docRef, { quantity: amount });
  }
  await updateInventory();
};

export const removeItem = async (item, amount, userId, updateInventory) => {
  if (!userId) {
    throw new Error("User ID is required to remove item.");
  }

  const docRef = doc(collection(firestore, `users/${userId}/inventory`), item);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const { quantity } = docSnap.data();
    if (quantity <= amount) {
      await deleteDoc(docRef);
    } else {
      await setDoc(docRef, { quantity: quantity - amount }, { merge: true });
    }
  }
  await updateInventory();
};

export const deleteItem = async (item, userId, updateInventory) => {
  if (!userId) {
    throw new Error("User ID is required to delete item.");
  }

  const docRef = doc(collection(firestore, `users/${userId}/inventory`), item);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    await deleteDoc(docRef);
  }
  await updateInventory();
};
