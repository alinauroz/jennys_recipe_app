import {ACCOUNT} from "../constants/constants"

const initialState = {
    token: ""
}

export default accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACCOUNT: {
            return {...state, token : action.payload}
        }
        default:
            return state
    }
}