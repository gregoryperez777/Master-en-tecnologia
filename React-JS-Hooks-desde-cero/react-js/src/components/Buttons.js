import React from 'react';

const Buttons = (props) => {

    const { fnShowName } = props;
    console.log(props);

    return(
        <div>
            <button onClick={() => fnShowName('Gregory Perez')}>click</button>
        </div>
    );
};

export default Buttons;
