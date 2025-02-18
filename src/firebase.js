import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCQmMperApOUww4wmXBp90AuCTv1A_cKz0",
  authDomain: "chat-app-by-aayush.firebaseapp.com",
  projectId: "chat-app-by-aayush",
  storageBucket: "chat-app-by-aayush.firebasestorage.app",
  messagingSenderId: "351840709800",
  appId: "1:351840709800:web:4543b8d50c97211856a69d",
  measurementId: "G-XWZTW6F0ZZ"
};
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;