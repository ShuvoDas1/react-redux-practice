import {BUY_ICECREAM, ADD_ICECREAM}  from './IceCreamTypes'

const initialIceCream = {
    numOfIceCream: 20
}

const iceCreamReducer = (state =  initialIceCream, action) =>{
    switch (action.type) {
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        case ADD_ICECREAM: {
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + 1
            }
        }
        
    
        default: return state
    }
}

export default iceCreamReducer