import {ACCOUNT} from "../constants/constants"

export function accountAction(token) { 
    return {
        type : ACCOUNT,
        payload : token
    }
}