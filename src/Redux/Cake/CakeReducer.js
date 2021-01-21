import { BUY_CAKE, ADD_CAKE } from './CakeTypes'

const initialState = {
    numOfCakes: 15
}
export const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case ADD_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes + 1
            }
        default: return state
    }
}

export default cakeReducer

