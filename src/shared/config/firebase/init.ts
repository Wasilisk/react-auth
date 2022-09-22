import * as firebase from "firebase/app"

import { 
    FIREBASE_APP_ID, 
    FIREBASE_DOMAIN, 
    FIREBASE_KEY, 
    FIREBASE_MEASUREMENT_ID, 
    FIREBASE_PROJECT_ID, 
    FIREBASE_SENDER_ID, 
    FIREBASE_STORAGE_BUCKET 
} from "./constants";

export const app = firebase.initializeApp({
  apiKey: FIREBASE_KEY,
  authDomain: FIREBASE_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
});