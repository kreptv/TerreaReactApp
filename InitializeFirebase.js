import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { firebaseConfig } from './firebaseConfig';


export const app = initializeApp(firebaseConfig);
//export const db = getFirestore(app);