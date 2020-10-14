import React, {Fragment} from 'react'

export default function Controls(props){
   
    function handleChange(event) {
        props.onSliderChange(event.target.value);
        
    }

    return (


        <Fragment> 
            <h4> I Play and Pause and adjust BPM()</h4>
                <input type="range" id="bpm" name="bpm" min="1" max="200" onChange={handleChange}></input>
                
        </Fragment>

    )
}