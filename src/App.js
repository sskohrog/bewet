import React from 'react';
import { Route, Routes } from 'react-router-dom';


import { Landing } from './landing/Landing';
import { SchedulingPage } from './scheduler/SchedulingPage';
import { FirebaseProvider, FirebaseContext } from './global/FirebaseContext';
import { Header } from './global/Header';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Countdown } from './countdown/Countdown';
function App() {
  return (
    <>
      <Header />
      <FirebaseProvider>
        <FirebaseContext.Consumer>
          {({ firebaseDB, addEmailToList }) => {
            return firebaseDB ? (
              <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/countdown' element={<Countdown />} />
                <Route path='/scheduler' element={<SchedulingPage />} />
              </Routes>
            ) : (
              <></>
            );
          }}
        </FirebaseContext.Consumer>
      </FirebaseProvider>
    </>
  );
}

export default App;
