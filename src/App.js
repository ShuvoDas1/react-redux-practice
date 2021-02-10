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
import UserContainer from './Components/UserContainer';
import NewUser from './Components/NewUser';
import ShowAllUsers from './Components/ShowAllUsers';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NewUser />
        <ShowAllUsers />
        {/* <UserContainer /> */}
        {/* <ItemContainer iceCream />
        <ItemContainer />
        <CakesShop />
        <ReduxHooksCakeContainer />
        <IceCreamShop />
        <ReduxHooksIceCreamContainer />
        <ChocolateShop /> */}
      </div>
    </Provider>
  );
}

export default App;
