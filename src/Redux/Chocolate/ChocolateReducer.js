import {BUY_CHOCOLATE, ADD_CHOCOLATE} from './ChocolateTypes'

const initialChocolate = {
    numOfChocolate: 25
}

const chocolateReducer = (state =  initialChocolate, action) =>{
    
    switch (action.type) {
        case BUY_CHOCOLATE: 
        return {
            numOfChocolate: state.numOfChocolate - action.payload
        }

        case ADD_CHOCOLATE:
            return{
                numOfChocolate: state.numOfChocolate + action.payload
            }
    
        default:
            return state
    }
}

export default chocolateReducer;