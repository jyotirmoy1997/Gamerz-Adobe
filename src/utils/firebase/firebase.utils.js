import { initializeApp } from "firebase/app";
import {
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import {
  getFirestore, 
  doc, 
  setDoc, 
  getDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDPy_yrRp0ntk_dVSwW0ITNyDDfWev2rN0",
  authDomain: "gamerz-adobe-db.firebaseapp.com",
  projectId: "gamerz-adobe-db",
  storageBucket: "gamerz-adobe-db.appspot.com",
  messagingSenderId: "86503395519",
  appId: "1:86503395519:web:5559a0afd5890b6050b60a"
};

// 1. Initializing the Firebase Application
const firebaseApp = initializeApp(firebaseConfig);

// 2. Initializing a new google authentication provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({prompt : "select_account"})

// 3. Generating new Auth_Token
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)


// 4. Setting Up our database
export const db = getFirestore();

// 5. Creating a user reference in database from Authentication Token
export const createUserFromAuth = async (userAuth, additionalInfo={}) => {

  console.log(userAuth);
  /* Asking the database about providing the info about the user with authentication id : uid
  Google will create a user reference even if there is no user existing in the database
  */
  const userDocRef = doc(db, 'users', userAuth.uid);
  // console.log(userDocRef);

  /* Getting the user snapshot : this is a special object that allows 
  us to check different aspects of the user data */
  const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot);

  // If user data does not exists, then we create a new user and update the database
  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
    }
    catch(error){
      console.log(error.message);
    }
    return userDocRef;
  }
}


// Creating authentication of user using email and password
export const createAuthUserWithEmailandPassword = async (email, password) => 
{
  if(!password || !email) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

// Signing In of user using email and password
export const signInAuthUserWithEmailandPassword = async (email, password) => 
{
  if(!password || !email) return;
  return await signInWithEmailAndPassword(auth, email, password);
}