import {ACCOUNT} from "../constants/constants"

export function save(token) { 
    return {
        type : ACCOUNT,
        payload : token
    }
}