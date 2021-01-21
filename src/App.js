import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './Redux/Store'
import CakesShop from './Components/CakesShop';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakesShop />
      </div>
    </Provider>
  );
}

export default App;
