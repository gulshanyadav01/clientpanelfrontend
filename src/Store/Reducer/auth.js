import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR
}
from "../../Store/Action/Action"

const initialState = {
    token: null,
    isAuthenticated: null,
    loading: true
}

 const authReducer = (state = initialState, action) =>  {
    const { type, payload} = action; 
    switch(type){

        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                loading: false
            }
        
        case REGISTER_SUCCESS:
            localStorage.setItem('token' , payload.token)
            return{
                ...state,
                ...payload,
                token: localStorage.getItem('token'),
                isAuthenticated: true,
                loading:false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem("token");
            return{
                ...state,
                token:null,
                isAuthenticated:false
            }
            
        default:
            return state
        }
    

}
export default authReducer;