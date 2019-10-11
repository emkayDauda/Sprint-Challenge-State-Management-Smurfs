import * as actionTypes from "./actionTypes";

export const addSmurf = (smurf) => {
    return {
        type: actionTypes.ADD_SMURF,
        payload: smurf,
    }
}