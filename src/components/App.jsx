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
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

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
          {isLoggedIn ? (
            <>
              <h1 className="phonebookLink">Phonebook</h1>
              <UserMenu />
            </>
          ) : (
            <AuthNav />
          )}
        </div>
      </header>

      <Routes>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirect="/authorization">
              <PhonebookView />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/registration"
          element={
            <PublicRoute redirect="/contacts">
              <RegisterView />
            </PublicRoute>
          }
        />
        <Route
          path="/authorization"
          element={
            <PublicRoute redirect="/contacts">
              <LogInView />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}
