import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_USER,
    LOGIN_USER_FAIL   
}
from "../../Store/Action/Action"

const initialState = {
    token: null,
    isAuthenticated: false,
    
}

 const User = (state = initialState, action) =>  {
     
    switch(action.type){

        case REGISTER_SUCCESS:
            localStorage.setItem('token' , action.payload.token)
            return{
                ...state,
                token: localStorage.getItem('token'),
                isAuthenticated: true,
            }
        case REGISTER_FAIL:
        case LOGIN_USER_FAIL:
            // localStorage.removeItem("token");
            return{
                ...state,
                token:null,
                isAuthenticated:false
            }
        case LOGIN_USER:
            return{
                ...state,
                token: localStorage.getItem('token'),
                isAuthenticated: true
            }
        
            
        default:
            return state
        }
    

}
export default User;