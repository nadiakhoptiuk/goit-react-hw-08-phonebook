import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import PhonebookView from 'views/PhonebookView';
import RegisterView from 'views/RegisterView/RegisterView';
import LogInView from 'views/LogInView';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import ModalFormEditContact from './ModalFormEditContact';
import {
  isModalShownSelector,
  openedContactSelector,
} from 'redux/modal/modalSelectors';

export default function App() {
  const isModalShown = useSelector(isModalShownSelector);
  const openedContact = useSelector(openedContactSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />

      <main>
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
              <PublicRoute redirect="/contacts" restricted>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="/authorization"
            element={
              <PublicRoute redirect="/contacts" restricted>
                <LogInView />
              </PublicRoute>
            }
          />
        </Routes>
      </main>
      {isModalShown && <ModalFormEditContact openedContact={openedContact} />}
    </>
  );
}
