import {SAVE_RECIPIE, REMOVE_RECIPIE} from "../constants/constants"

const initialState = {
    saved: []
}

const saveReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_RECIPIE:
            return {...state, saved : state.saved.push(action.payload)}
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