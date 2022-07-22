import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import PhonebookView from 'views/PhonebookView';
import AuthNav from './AuthNav';
import RegisterView from 'views/RegisterView/RegisterView';
import LogInView from 'views/LogInView';
import UserMenu from './UserMenu';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { refreshCurrentUser } from 'redux/auth/authOperations';

export default function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <header className="header">
        <div className="headerContainer">
          <nav>
            <Link to="/contacts" className="phonebookLink">
              Phonebook
            </Link>
          </nav>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>

      <Routes>
        <Route path="/contacts" element={<PhonebookView />} />
        <Route path="/registration" element={<RegisterView />} />
        <Route path="/authorization" element={<LogInView />} />
        {/* <Route path="/contacts" element={<ContactsView />}></Route> */}
      </Routes>
    </>
  );
}
