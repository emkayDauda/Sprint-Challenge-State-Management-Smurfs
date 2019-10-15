import React from 'react';
import { Button } from "react-bulma-components";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { connect } from "react-redux";
import styled from "styled-components";
import * as actionCreators from "../state/actionCreators";

export const Smurf = props => {
    const { smurf } = props;
    const { deleteSmurf } = props;

    return (
        <Smurv>
            <div>
            <h3>Name: {smurf.name}</h3>
            <h3>Height: {smurf.height}</h3>
            <h3>Age: {smurf.age}</h3>
            </div>
            <StyledButton onClick={()=> deleteSmurf(smurf.id)} color='danger' >Remove Smurf</StyledButton>
            <StyledButton onClick={()=> deleteSmurf(smurf.id)} color='primary' >Edit Smurf</StyledButton>

        </Smurv>
    );
}

export default connect(state => state, actionCreators)(Smurf)

const Smurv = styled.div`
    margin-top: 3rem;
    margin-left: 2rem;
    border: .1rem solid gray;
    border-radius: 3rem;
    padding: 1.3rem 0;
    width: 30rem;
`

const StyledButton = styled(Button)`
    margin-left: 2rem;
`