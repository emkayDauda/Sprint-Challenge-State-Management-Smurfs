import React from 'react';
import { Button } from "react-bulma-components";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export const Smurf = props => {
    const { smurf } = props;
    return (
        <div>
            <h3>Name: {smurf.name}</h3>
            <Button color='danger' >Remove Smurf</Button>
        </div>
    );
}

export default connect(state => state, actionCreators)(Smurf)