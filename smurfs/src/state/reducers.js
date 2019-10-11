import * as actionTypes from "./actionTypes";

const initialSmurfsList = [
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  }
];


export const smurfReducer = (state = initialSmurfsList, actions) => {
    switch (actions.type) {
        case actionTypes.ADD_SMURF:
            return state;   
        default:
            return state;
    }
}