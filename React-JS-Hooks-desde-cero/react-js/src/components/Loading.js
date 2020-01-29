import React from 'react';

const Loading = ({ text }) => {
    
    console.log('props', text);

    return (
        <div>
            <h2>{text}</h2>
        </div>
    );

};

export default Loading;