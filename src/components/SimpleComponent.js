// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
    state = { 
        mood: "happy"
     }

     handleClick = () => {
         const {mood} = this.state
        //  this.setState({mood:"sad"})
         return mood === "happy" ? this.setState({mood: "sad"}) : this.setState({mood: "happy"})
     }


    render() { 
        return ( 

            <div onClick={this.handleClick}>{this.state.mood}</div>

         );
    }
}
 
export default SimpleComponent;