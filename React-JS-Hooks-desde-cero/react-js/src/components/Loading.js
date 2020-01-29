import React from 'react';

const Loading = (props) => {
    
    const { title, time } = props.data;
    console.log('props', props);

    return (
        <div>
            <h2>{title}</h2>
            <small> Tiempo estimado { time } segundos</small>
        </div>
    );

};

export default Loading;