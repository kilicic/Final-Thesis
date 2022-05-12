import React, { Component } from "react";
import './NumberInput.css'

class NumberInput extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            emotion: props.emotion, 
            minM: '', 
            maxM: '',
            minSD: '',
            maxSD: ''
        }
    }
    render() {
    return (
        <form className="form-input-number">
            <input type="text"
                className="number-input"
                onChange={(event) => {this.onInputChange(`minM`, event)}}>
            </input>
            <span>M</span>
            <input type="text"
                className="number-input"
                onChange={(event) => {this.onInputChange(`maxM`, event)}}>
            </input>
            <div className="space"></div>

            <input type="text"
                className="number-input"
                onChange={(event) => {this.onInputChange(`minSD`, event)}}>
            </input>
            
            <span>SD</span>
            <input type="text"
                className="number-input"
                onChange={(event) => {this.onInputChange(`maxSD`, event)}}>
            </input>
        </form>
    );
    }
    onInputChange = (key, event) => {
        this.setState({[key] : event.target.value})
        console.log(`SET ${key} as: ${event.target.value}`)
        console.log(this.state)
    }
}
export default NumberInput;