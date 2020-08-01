import {SAVE_RECIPIE, REMOVE_RECIPIE} from "../constants/constants"

const initialState = {
    saved: []
}

const saveReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case SAVE_RECIPIE: {
            if (state.saved.indexOf(action.payload) > -1) return state;
            state.saved.push(action.payload)
            return {...state, saved : state.saved}
        }
        case REMOVE_RECIPIE: {
            let saved = state.saved;
            if (saved.indexOf(action.payload) <= -1) return state;
            saved.splice(saved.indexOf(action.payload), 1);
            return {... state, saved}
        }
        default:
            return state
    }
}

export default saveReducer;