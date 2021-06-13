import { constants } from "./constants";

interface DepositAction {
    type: constants.DEPOSIT;
    payload: number;
}
interface WithDrawAction {
    type: constants.WITHDRAW;
    payload: number;
}
interface BanckRuptAction {
    type: constants.BANKRUPT;
}
  
export type Action = DepositAction | WithDrawAction | BanckRuptAction;

