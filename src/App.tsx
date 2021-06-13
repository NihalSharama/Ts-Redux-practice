import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "./actions";
import { State } from "./reducers";
import "./style.css";

const App: React.FC = () => {
  const [userAmount, setUserAmount] = useState("0");

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, BanckRupt } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <input
        type="text"
        placeholder="Enter your amount..."
        value={userAmount}
        onChange={(e) => setUserAmount(e.target.value)}
      />
      <div className="buttons">
        <button onClick={() => depositMoney(+userAmount)} id="dep">
          Deposit{" "}
        </button>
        <button onClick={() => withdrawMoney(+userAmount)} id="wit">
          Withdraw{" "}
        </button>
        <button onClick={() => BanckRupt()} id="ban">
          Bankrupt
        </button>
      </div>
    </div>
  );
};

export default App;
