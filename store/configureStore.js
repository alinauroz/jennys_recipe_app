import {createStore, combineReducers} from 'redux'

import saveReducer from "../reducers/save_reducer"
import account_reducer from '../reducers/account_reducer'
 
const rootReducer = combineReducers({
    save : saveReducer,
    account_reducer: account_reducer
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore;