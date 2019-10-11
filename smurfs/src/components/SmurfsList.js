import React from 'react';
import { connect } from "react-redux";

export const SmurfsList = props => {
    const { smurfs } = props;
    return(
        <div>
            
        </div>
    )
}

export default connect(
    state => state,
)(SmurfsList)