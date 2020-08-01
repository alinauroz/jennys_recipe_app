import {SAVE_RECIPIE} from "../constants/constants"

export function save(recipie) { 
    return {
        type : SAVE_RECIPIE,
        payload : recipie
    }
}