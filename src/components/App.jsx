import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Watch } from 'react-loader-spinner';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import Header from './Header';
import {
  isModalShownSelector,
  openedContactSelector,
} from 'redux/modal/modalSelectors';
import { getIsRefreshingUser } from 'redux/auth/authSelectors';

const PhonebookView = lazy(() =>
  import('views/PhonebookView' /* webpackChunkName: "contacts" */)
);
const RegisterView = lazy(() =>
  import(
    'views/RegisterView/RegisterView' /* webpackChunkName: "registration" */
  )
);
const LogInView = lazy(() =>
  import('views/LogInView' /* webpackChunkName: "authorization" */)
);
const ModalFormEditContact = lazy(() =>
  import('./ModalFormEditContact' /* webpackChunkName: "modal-wdw" */)
);

export default function App() {
  const isModalShown = useSelector(isModalShownSelector);
  const openedContact = useSelector(openedContactSelector);
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getIsRefreshingUser);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isRefreshingUser ? (
    <Watch
      height={80}
      width={80}
      radius={45}
      color="#1a75cfb3"
      wrapperClass="mainLoader"
      ariaLabel="loading-indicator"
    />
  ) : (
    <>
      <Header />

      <Suspense
        fallback={
          <Watch
            height={80}
            width={80}
            radius={45}
            color="#1a75cfb3"
            wrapperClass="mainLoader"
            ariaLabel="loading-indicator"
          />
        }
      >
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
      </Suspense>
    </>
  );
}
