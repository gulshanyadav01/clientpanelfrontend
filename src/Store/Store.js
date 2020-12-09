import { createStore, applyMiddleware } from "redux"; 
import { composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"; 
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel12 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

// import ClientReducer from "./Reducer/ClientReducer"
import rootReducer from "./Reducer/index";

const middleware = [thunk]; 

const persistConfig = {
    key:'root',
    storage: storage,
    stateReconciler: autoMergeLevel12
}
const pReducer = persistReducer(persistConfig , rootReducer);
// const initialState = {}; 

export const store = createStore(pReducer , composeWithDevTools(applyMiddleware(...middleware)))
export const persistor = persistStore(store)

