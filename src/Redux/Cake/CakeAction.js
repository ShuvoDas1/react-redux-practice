import {BUY_CAKE, ADD_CAKE} from './CakeTypes'

export const buyCake = () =>{
    return {
        type: BUY_CAKE
    }
}

export const addCake = () =>{
    return {
        type: ADD_CAKE
    }
}