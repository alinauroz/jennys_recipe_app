import {ADD_RECIPIE} from "../constants/constants"

export function addRecipie(recipie) { 
    return {
        type : ADD_RECIPIE,
        payload : recipie
    }
}