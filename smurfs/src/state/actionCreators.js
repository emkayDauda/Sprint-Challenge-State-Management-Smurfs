import * as actionTypes from "./actionTypes";
import axios from "axios";

const smurfsApi = `http://localhost:3333/smurfs`;

export const addSmurf = (smurf) => {
    return {
        type: actionTypes.ADD_SMURF,
        payload: {smurf: smurf},
    }
}

export const getSmurfs = () => dispatch => {
    axios.get(smurfsApi)
    .then((response) => {
        console.log(response.data);
        dispatch(addSmurf(response.data))

        // response.data.forEach(smurf => {
        //     dispatch(addSmurf(smurf))
        // });
    })
    .catch((error) => {
        console.log(error);
    })
}

export const postSmurf = (smurf) => dispatch => {
    axios.post(smurfsApi, smurf)
    .then((response) => {
        dispatch(addSmurf(response.data))

        console.log(response.data);
        // response.data.forEach(smurf => {
        //     dispatch(addSmurf(smurf))
        // });
    }).catch((error) => {
        console.log(error);
    })
}