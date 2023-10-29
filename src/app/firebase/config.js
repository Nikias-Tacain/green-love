import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBIHwQxutnyQvQJsNQqra-HRoXRDGYkS14",
  authDomain: "greenlove-7e544.firebaseapp.com",
  projectId: "greenlove-7e544",
  storageBucket: "greenlove-7e544.appspot.com",
  messagingSenderId: "992293239295",
  appId: "1:992293239295:web:ce86c852af6ba3cbd5cfca"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);