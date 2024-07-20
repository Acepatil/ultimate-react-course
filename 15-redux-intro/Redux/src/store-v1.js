import { combineReducers, createStore } from "redux";
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      // LATER
      return {
        ...state,
        loan: action.payload.amount,
        balance: state.balance + action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function customerReducer(state=initialStateCustomer,action){
    switch(action.type){
        case"customer/createCustomer":
            return {
                ...state,
                fullName:action.payload.fullName,
                nationalId:action.payload.nationalId,
                createdAt:action.payload.createdAt
            }
        case "customer/updateName":
            return{
                ...state,
                fullName:action.payload
            }

        default:
            return state
    }
}

const rootReducer=combineReducers({
    account:accountReducer,
    customer:customerReducer
})
const store = createStore(rootReducer);

store.dispatch({ type: "account/deposit", payload: 500 });
console.log(store.getState());
store.dispatch({
  type: "account/requestLoan",
  payload: {
    amount: 5000,
    purpose: "The main reason is your mom",
  },
});
console.log(store.getState());

store.dispatch({ type: "account/withdraw", payload: 500 });
console.log(store.getState());

store.dispatch({ type: "account/payLoan" });
console.log(store.getState());

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: {
      amount,
      purpose,
    },
  };
}

function payLoan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(500));
console.log(store.getState());
store.dispatch(requestLoan(5002, "My mon is sick"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullName, nationalId) {
    return {
        type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
};
}


function updateName(fullName){
    return{
        type:"customer/updateName",
        payload:fullName
    }
}

store.dispatch(createCustomer("Sourabh Patil",465661))
console.log(store.getState());

store.dispatch(updateName("Rudolf Maner"))
console.log(store.getState());