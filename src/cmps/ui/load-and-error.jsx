import React from 'react';
import './loader.css';
import './error.css';
import fatRocket from './rocket-128px.svg';

// LOADING

export const rocketLoader = () => {
    return (
        <img className="rocket" src={fatRocket} alt="loader-icon" />
      );
}
export const rippleLoader = () => {
    return (
        <div className="lds-ripple"> <div></div> <div></div> </div>
        );
}


export const renderSavingMessage = (msg = 'new user') => {
    return (
        <div className="alert alert-info">
            Saving {msg}...
        </div>
    );
};




// ERROR
// role = danger / warning
export const renderPostError = (msg = 'save the user') => {
    return (
        <div className="alert alert-danger">
            An error occurred! Unable to {msg}.
        </div>
    );
};

export const renderFetchError = () => {
    return (
        <div className="alert alert-danger">
            Something went wrong 
        </div>
    );
};
export const renderMsgError = (msg ,role = 'danger') => {
    return (
        <div className={"alert alert-" + role}>
            {msg}
        </div>
    );
};

