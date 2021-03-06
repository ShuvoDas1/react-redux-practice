import {
    USER_FETCH_FAILURE, 
    USER_FETCH_SUCCESS, 
    USER_FETCH_REQUEST
} from './UserTypes.js'

import axios from 'axios'

export const userFetchRequest = () =>{
    return {
        type: USER_FETCH_REQUEST
    }
}

export const userFetchSuccess = users =>{
    return{
        type: USER_FETCH_SUCCESS,
        payload: users
    }
}

export const userFetchFailure = error =>{
    return {
        type: USER_FETCH_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {

    return (dispatch)=>{
        dispatch(userFetchRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res  => { 
            const users = res.data
            dispatch(userFetchSuccess(users))
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(userFetchFailure(errorMsg))
        })
    }
}