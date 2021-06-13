import { combineReducers } from 'redux';
import BankReducer from './BankReducer'

const reducer = combineReducers({
    bank: BankReducer
})

export default reducer;

export type State = ReturnType<typeof reducer>