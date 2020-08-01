import {createStore, combineReducers} from 'redux'

import saveReducer from "../reducers/save_reducer"
 
const rootReducer = combineReducers({
    save : saveReducer
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore;