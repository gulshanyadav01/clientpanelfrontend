import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL
}
from "../../Store/Action/Action"

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user:null
}

 const authReducer = (state = initialState, action) =>  {
    const { type, payload} = action; 
    switch(type){
        case REGISTER_SUCCESS:
            localStorage.setItem("token", payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading:false
            }
        case REGISTER_FAIL:
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