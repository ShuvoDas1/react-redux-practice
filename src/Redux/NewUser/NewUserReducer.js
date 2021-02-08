import { NEWUSER_ADD_REQUEST, NEWUSER_ADD_SUCCESS, NEWUSER_ADD_FAILURE } from './NewUserTypes'

const initialNewUser = {
    loading: false,
    user: {},
    error: ''
}

const newUserReducer = (state = initialNewUser, action) =>{

    switch (action.type) {
        case NEWUSER_ADD_REQUEST:
            return{
                ...state,
                loading: true
            }
        case NEWUSER_ADD_SUCCESS: 
            return{
                loading: false,
                user:  action.payload,
                error: ''
            }
        case NEWUSER_ADD_FAILURE:
            return{
                loading: false,
                user: {},
                error: action.payload
            }
    
        default: return state
    }
}

export default newUserReducer