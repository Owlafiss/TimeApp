import React from 'react';



function timeDisplay(props) {
    return (
        <>
            <span>
                {props.text} Time is: <br />
                {props.time}
            </span>

            <span>
                Naverland 9 2600
            </span>

        </>
    )
}

export default timeDisplay;