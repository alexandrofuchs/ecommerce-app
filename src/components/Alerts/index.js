import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function ErrorAlert({ message }){
    return(
        <div>    
            <span className="errortext">{message}</span>
        </div>
    )
}

function SucessAlert({ message }){
    return(
        <div>    
            <span className="sucesstext">{message}</span>
        </div>
    )
}

SucessAlert.propTypes = {
    message: PropTypes.string.isRequired
}
ErrorAlert.propTypes = {
    message: PropTypes.string.isRequired
}

export { SucessAlert, ErrorAlert }