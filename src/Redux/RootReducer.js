import {combineReducers} from 'redux'
import iceCreamReducer from './IceCream/IceCreamReducer'
import cakeReducer from './Cake/CakeReducer'
import chocolateReducer from './Chocolate/ChocolateReducer'
import userReducer from './Users/UserReducer'
import newUserReducer from './NewUser/NewUserReducer'

 const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    chocolate: chocolateReducer,
    users: userReducer, 
    newUser: newUserReducer
})

export default rootReducer