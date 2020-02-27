import React from 'react';
import '../components/styles/Error.css';
import ServerErrorImg from '../images/500.png';

const ServerError = () => (
    <div className="text-center">
        <h1 className="error-text"> Error: 500 Unexpected Error</h1>
        <img src={ServerErrorImg} alt="500 Unexpected Error" className="error-image" />
    </div>
)

export default ServerError;
