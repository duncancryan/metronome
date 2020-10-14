import React, {Component, Fragment} from 'react';
import SoundSelect from '../components/SoundSelect';
import BeatsPerMinute from '../components/BeatsPerMinute';
import Controls from '../components/Controls';




export default class MetronomeContainer extends Component{

    // Constructor
    constructor(props){
        super(props);
       // state
        this.state = {
            holder1: "",
            bpm: ""
        };
        
        // binds
        this.onSliderChange = this.onSliderChange.bind(this);
    }


    // Methods

    // function which recongises the handle change in controls for the slider in this context
    onSliderChange(incomingBpm) {
        this.setState ({ bpm: incomingBpm});
    }
    // function which recognises play/pause handleToggle in controls in this context
    
    // Function that creates a sound

    // Mounted

    
    // Render

    // pass down result of recognition of slider value to beats per minute where it will define the intervals 

render(){
    return(
        <Fragment>
            <div> Metronome </div> 
            
            <SoundSelect/>

            <Controls onSliderChange={this.onSliderChange}/>

            <BeatsPerMinute bpm={this.state.bpm}/>


        </Fragment>

    )
}

} 