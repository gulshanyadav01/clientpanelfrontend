import { createStore, applyMiddleWare } from "redux"; 
import { composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"; 
import ClientReducer from "./Reducer/ClientReducer"

const middleware = [thunk]; 

const initialState = {}; 

const Store = createStore(ClientReducer, initialState, composeWithDevTools(applyMiddleWare(...middleware))); 



export default Store; 