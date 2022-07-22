import React from 'react';
import { useSelector } from 'react-redux';
import PhonebookView from 'views/PhonebookView';
import AuthNav from './AuthNav';
import { Route, Routes } from 'react-router-dom';
import RegisterView from 'views/RegisterView/RegisterView';
import LogInView from 'views/LogInView';
import UserMenu from './UserMenu';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export default function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <header className="header">
        <div className="headerContainer">
          <h1>Phonebook</h1>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>

      <Routes>
        <Route path="" element={<PhonebookView />} />
        <Route path="/registration" element={<RegisterView />} />
        <Route path="/authorization" element={<LogInView />} />
        {/* <Route path="/contacts" element={<ContactsView />}></Route> */}
      </Routes>
    </>
  );
}
