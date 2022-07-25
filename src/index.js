import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';
import { persistor } from './redux/store';
import App from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter basename="/">
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

//basename="/goit-react-hw-08-phonebook/contacts/"
