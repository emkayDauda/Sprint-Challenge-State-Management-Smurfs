import React from 'react';
import { Button } from "react-bulma-components";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export const Smurf = props => {
    const { smurf } = props;
    const { deleteSmurf } = props;

    return (
        <div>
            <h3>Name: {smurf.name}</h3>
            <h3>Height: {smurf.height}</h3>
            <h3>Age: {smurf.age}</h3>
            <Button onClick={()=> deleteSmurf(smurf.id)} color='danger' >Remove Smurf</Button>
        </div>
    );
}

export default connect(state => state, actionCreators)(Smurf)