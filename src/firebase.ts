import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxihLElrVZyu10ozrki0Dpc6zpmLoW8BU",
  authDomain: "job-board-1afd8.firebaseapp.com",
  projectId: "job-board-1afd8",
  storageBucket: "job-board-1afd8.appspot.com",
  messagingSenderId: "58571899714",
  appId: "1:58571899714:web:c1e2c183b5448b3f7a7edb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app