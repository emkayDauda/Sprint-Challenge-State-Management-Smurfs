import React, {useEffect} from 'react';
import { connect } from "react-redux";

import * as actionCreators from "../state/actionCreators";
import Smurf from './Smurfs';

export const SmurfsList = props => {
    const { smurfs, getSmurfs } = props;
    console.log(props);
    
        useEffect( () => {
            getSmurfs()
        }, [])
    return(
        <div>
            {
                smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)
            }
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(SmurfsList)