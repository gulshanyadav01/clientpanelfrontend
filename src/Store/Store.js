import { createStore, applyMiddleware } from "redux"; 
import { composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"; 
import ClientReducer from "./Reducer/ClientReducer"

const middleware = [thunk]; 

const initialState = {}; 

const Store = createStore(ClientReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))); 



export default Store; 