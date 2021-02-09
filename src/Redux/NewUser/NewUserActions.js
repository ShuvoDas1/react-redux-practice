import { NEWUSER_ADD_REQUEST, NEWUSER_ADD_SUCCESS, NEWUSER_ADD_FAILURE } from './NewUserTypes'
import axios from 'axios'

export const newUserRequest = () =>{
    return {
        type: NEWUSER_ADD_REQUEST

    }
}

export const newUserSuccess = newUserObj =>{
    return {
        type: NEWUSER_ADD_SUCCESS,
        payload: newUserObj
    }
}

export const newUserFailure = error =>{
    return {
        type: NEWUSER_ADD_FAILURE,
        payload: error
    }
}

export const  addUser = newUserObj =>{
    return (dispatch) =>{
        dispatch(newUserRequest())
        axios.post('https://jsonplaceholder.typicode.com/posts',{newUserObj})
        .then(res => {
            dispatch(newUserSuccess(res.data))
        })
        .catch(error=>{
            dispatch(newUserFailure(error.message))
        })
    }
}