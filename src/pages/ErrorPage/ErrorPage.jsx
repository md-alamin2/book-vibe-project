import React from 'react';
import errorImage from "../../assets/error_bg.jpg"

const ErrorPage = () => {
    return (
        <div className='min-h-screen bg-no-repeat bg-center bg-contain' style={{
            backgroundImage: `url(${errorImage})`,
          }}>
        </div>
    );
};

export default ErrorPage;