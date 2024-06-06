import { Provider } from 'react-redux';
import './App.css';
import Router from './router/Router';
import Store from './pages/login/reduxContainer/Store';
// import store from './store/store';

function App() {
  return (
    <Provider store={Store}>
      <Router/>
     </Provider>
  );
}

export default App;
