import { Dispatch } from "redux"
import { Action } from "../ActionType"
import { constants } from "../constants"


export const depositMoney = (amount:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: constants.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: constants.WITHDRAW,
            payload: amount
        })
    }
}
export const BanckRupt = () => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: constants.BANKRUPT
        })
    }
}