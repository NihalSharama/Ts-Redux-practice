import { Action } from "../ActionType";
import { constants } from "../constants";

const initialState = 0;

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case constants.DEPOSIT:
      return (state = state + action.payload);

    case constants.WITHDRAW:
      if (state === 0) {
        alert("you have no Ruppe");
        break;
      } else {
        return (state = state - action.payload);
        
      }

    case constants.BANKRUPT:
      return (state = 0);
      
    default:
      return state;
      
  }
};

export default reducer;
