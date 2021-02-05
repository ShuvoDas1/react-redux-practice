import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './Redux/Store'
import CakesShop from './Components/CakesShop';
import ReduxHooksCakeContainer from './Components/ReduxHooksCakeContainer';
import IceCreamShop from './Components/IceCreamShop';
import ReduxHooksIceCreamContainer from './Components/ReduxHooksIceCreamContainer';
import ChocolateShop from './Components/ChocolateShop';
import ItemContainer from './Components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer iceCream />
        <ItemContainer />
        <CakesShop />
        <ReduxHooksCakeContainer />
        <IceCreamShop />
        <ReduxHooksIceCreamContainer />
        <ChocolateShop />
      </div>
    </Provider>
  );
}

export default App;
