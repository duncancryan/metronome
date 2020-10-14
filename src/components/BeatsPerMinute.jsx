import React, {Fragment} from 'react';

export default function BeatsPerMinute(props){
    return(
        <Fragment>
        <div>BPM: {props.bpm}</div>
        </Fragment>
    )
}