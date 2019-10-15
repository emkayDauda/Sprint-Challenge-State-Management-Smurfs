import React, {useEffect} from 'react';
import { connect } from "react-redux";
import styled from "styled-components";

import * as actionCreators from "../state/actionCreators";
import Smurf from './Smurfs';

export const SmurfsList = props => {
    const { smurfs, getSmurfs } = props;
    console.log(props);
    
        useEffect( () => {
            getSmurfs()
        }, [])
    return(
        <StyledList>
            {
                smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)
            }
        </StyledList>
    )
}

export default connect(
    state => state,
    actionCreators
)(SmurfsList)

const StyledList = styled.div`
    display: flex;
    flex-wrap: wrap;
`