// your Bomb code here!
import React, { Component }from 'react';

export default class Bomb extends Component{

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
        console.log(this.state.secondsLeft)
    }


    // render(){
    //     return(
    //         <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    //     )
    // }

    render(){
        if (this.state.secondsLeft >= 1){
        return (<div>{this.state.secondsLeft} seconds left before I go boom!</div>)
            } else {
        return (<div>Boom!</div>)
            }
    }

}