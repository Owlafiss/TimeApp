import React from 'react';



function TimeDisplay(props) {
    return (
        <>
            <span>
                {props.text} Time is:<br/>
                {props.time}
            </span>
            <span>
                Naverland 9 2600
            </span>
        </>
    )
}

export default TimeDisplay;