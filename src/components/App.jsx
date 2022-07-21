import React from 'react';
import PhonebookView from 'views/PhonebookView';
import AuthNav from './AuthNav';
import { Route, Routes } from 'react-router-dom';
import RegisterView from 'views/RegisterView/RegisterView';

export default function App() {
  return (
    <>
      <header className="header">
        <div className="headerContainer">
          <h1>Phonebook</h1>
          <AuthNav />
          {/* <UserMenu /> */}
        </div>
      </header>

      <Routes>
        <Route path="" element={<PhonebookView />} />
        <Route path="/registration" element={<RegisterView />} />
        {/* <Route path="/authorization" element={<AuthView/>}/> */}
      </Routes>
    </>
  );
}
