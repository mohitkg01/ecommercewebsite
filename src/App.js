import { Provider } from 'react-redux';
import './App.css';
import Router from './router/Router';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from './reduxContainer/store/Store';


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
