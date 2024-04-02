/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

const FirebaseContext = React.createContext(null);

function FirebaseProvider({ children }) {
  const [firebaseDB, setFirebaseDB] = useState(null);

  useEffect(() => {
    const app = initializeApp({
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      // databaseURL: process.env.REACT_APP_DATABASE_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_ID,
      measurementId: process.env.REACT_APP_MEASUREMENT_ID
    });
    // Initialize Firebase
    const db = getFirestore(app);
    setFirebaseDB(db);
    getAnalytics(app);
  }, []);

  const addEmailToList = async (email) => {
    await addDoc(collection(firebaseDB, 'betwet-waitlist'), {
      email: email
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        firebaseDB,
        addEmailToList
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}

export { FirebaseContext, FirebaseProvider };
