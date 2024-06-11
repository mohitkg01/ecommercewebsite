import { Provider } from 'react-redux';
import './App.css';
import Router from './router/Router';
import {Store ,persistor } from './reduxContainer/Store';
import { PersistGate } from 'redux-persist/integration/react';
// import store from './store/store';

function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
      <Router/>
      </PersistGate>
     </Provider>
  );
}

export default App;
