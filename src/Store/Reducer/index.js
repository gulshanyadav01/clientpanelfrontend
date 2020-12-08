import {combineReducers } from "redux"; 

import User from "./auth";
import Client from "./ClientReducer"

export default combineReducers({
    user: User,
    client:Client
}) 