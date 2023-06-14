import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="container mt-3">
      <h2>Deposit or Withdraw Money</h2>
      {/*<button type="button " class="btn btn-primary mx-3" onClick={()=>{dispatch(actionCreators.despositMoney(100))}}>+</button>
        Money
  <button type="button " class="btn btn-primary mx-3" onClick={()=>{dispatch(actionCreators.withDrawMoney(100))}}>-</button>*/}
      <button
        type="button "
        class="btn btn-primary mx-3"
        onClick={()=>{actions.despositMoney(100)}}
      >
        +
      </button>
      Money
      <button
        type="button "
        class="btn btn-primary mx-3"
        onClick={()=>{actions.withDrawMoney(100)}}
      >
        -
      </button>
    </div>
  );
};

export default Shop;
