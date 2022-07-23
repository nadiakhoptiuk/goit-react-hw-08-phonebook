import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import PhonebookView from 'views/PhonebookView';
import RegisterView from 'views/RegisterView/RegisterView';
import LogInView from 'views/LogInView';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import Header from './Header';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import ModalFormEditContact from './ModalFormEditContact';
import {
  isModalShownSelector,
  openedContactSelector,
} from 'redux/modal/modalSelectors';
import { getIsRefreshingUser } from 'redux/auth/authSelectors';

export default function App() {
  const isModalShown = useSelector(isModalShownSelector);
  const openedContact = useSelector(openedContactSelector);
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getIsRefreshingUser);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingUser && (
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
    )
  );
}
