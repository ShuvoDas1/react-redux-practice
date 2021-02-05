import {combineReducers} from 'redux'
import iceCreamReducer from './IceCream/IceCreamReducer'
import cakeReducer from './Cake/CakeReducer'
import chocolateReducer from './Chocolate/ChocolateReducer'

 const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    chocolate: chocolateReducer
})

export default rootReducer