import * as actionTypes from "./actionTypes";
import axios from "axios";

const smurfsApi = `http://localhost:3333/smurfs`;

export const addSmurf = (smurfs) => {
    return {
        type: actionTypes.ADD_SMURF,
        payload: smurfs,
    }
}

export const getSmurfs = () => dispatch => {
    axios.get(smurfsApi)
    .then((response) => {
        dispatch(response.data)
    })
    .catch((error) => {
        console.log(error);
    })
}