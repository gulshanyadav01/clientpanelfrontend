import { combineReducers } from "redux"; 

import User from "./AuthReducer";
import Client from "./ClientReducer"

export default combineReducers({
    user: User,
    client:Client
}) 