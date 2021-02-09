import { NEWUSER_ADD_REQUEST, NEWUSER_ADD_SUCCESS, NEWUSER_ADD_FAILURE } from './NewUserTypes'

const initialNewUser = {
    loading: false,
    users: [],
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
            const users = state.users.concat(action.payload)
            return{
                loading: false,
                users: users,
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