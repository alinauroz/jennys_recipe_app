import {ADD_RECIPIE} from '../constants/constants'

const initialState = {
    
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECIPIE:
            return {...state, value : action.payload}
        default:
            return state
    }
}

export default countReducer;