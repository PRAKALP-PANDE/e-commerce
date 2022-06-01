import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "products");
class ProductDataService {
  addProducts = (newProduct) => {
    return addDoc(bookCollectionRef, newProduct);
  };

  updateProduct = (id, updatedProduct) => {
    const productDoc = doc(db, "products", id);
    return updateDoc(productDoc, updatedProduct);
  };

  deleteProduct = (id) => {
    const productDoc = doc(db, "products", id);
    return deleteDoc(productDoc);
  };

  getAllProducts = () => {
    return getDocs(bookCollectionRef);
  };

  getProduct = (id) => {
    const productDoc = doc(db, "products", id);
    return getDoc(productDoc);
  };
}

export default new ProductDataService();