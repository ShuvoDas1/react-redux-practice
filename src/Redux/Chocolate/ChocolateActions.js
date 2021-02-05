import {BUY_CHOCOLATE, ADD_CHOCOLATE} from './ChocolateTypes.js'

export const buyChocolate = (number = 1) =>{
    return {
        type: BUY_CHOCOLATE,
        payload: number
    }
}

export const addChocolate = (addNumber = 1) =>{
    return {
        type: ADD_CHOCOLATE,
        payload: addNumber
    }
}

