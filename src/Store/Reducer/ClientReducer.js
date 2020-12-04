import {ADD_CLIENT,
     DELETE_CLIENT_BY_ID, 
     GET_CLIENTS, 
     GET_CLIENT_BY_ID,
      UPDATE_CLIENT_BY_ID 
    } from "../Action/Action"

const initialState = {
    clients:[
        {firstName:"gulshan", lastName:"yadav", email:"gulshany01@gmail.com"}
    ]
}

const ContactReducer = (state = initialState, action) => { 
    switch(action.type){
        case ADD_CLIENT:
            return{
                ...state,
                clients: [...state.clients, action.payload]
                
        }
        case GET_CLIENTS:
            return state
        default:
            return state;
    }
}

export default ContactReducer; 