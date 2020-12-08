import { createStore, applyMiddleware } from "redux"; 
import { composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"; 
// import ClientReducer from "./Reducer/ClientReducer"
import rootReducer from "./Reducer/index";

const middleware = [thunk]; 

// const initialState = {}; 

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware))); 



export default Store; 