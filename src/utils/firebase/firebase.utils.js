import { initializeApp } from "firebase/app";
import {
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import {
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  collection,
  writeBatch,
  query,
  getDocs
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

// This function uploads all the JSON data into our Firestore database
export const addCollectionandDocuments = async (collectionkey, objects) => {

  // Creating a new Collection Object reference
  const collectionRef = collection(db, collectionkey);

  // Creating a new batch object. This object helps us in performing a transaction.
  const batch = writeBatch(db);

  objects.forEach((object) => {
    // Creating a new document reference for every object
    const docRef = doc(collectionRef, object.title);

    // Setting new user doc reference in batch
    batch.set(docRef, object);
  })




  /* Performing the transaction of data to firestore database
   once the objects are appended to the document */
  await batch.commit()
  console.log("Done")
}

// This function fetches all the data from the firestore database
export const getCollectionandDocuments = async () => {
    // Creating a collection reference
    const collectionRef = collection(db, 'categories')

    // Creating a query object for performing operations on the collection reference
    const q = query(collectionRef)

    // Capturing a snapshot of the data. querySnapShot.docs returns an array
    const querySnapShot = await getDocs(q);

    // Building a new instance of the data we get from the firestore database
    const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
      const {title, items} = docSnapShot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})

    return categoryMap;
}

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

// Creating an Observable Listener
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

// Creating a SignOut Function
export const signOutUser = async () => await signOut(auth);