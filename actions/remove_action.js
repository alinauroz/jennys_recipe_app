import {REMOVE_RECIPIE} from "../constants/constants"

export function remove(recipie) { 
    return {
        type : REMOVE_RECIPIE,
        payload : recipie
    }
}