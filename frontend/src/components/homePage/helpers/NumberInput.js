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
        let { onInputChange } = this.props
    return (
        <form className="form-input-number">
            <input type="text"
                className="number-input"
                onChange={(event) => {onInputChange(this.props.emotion,`minM`, event)}}>
            </input>
            <span>M</span>
            <input type="text"
                className="number-input"
                onChange={(event) => {onInputChange(this.props.emotion,`maxM`, event)}}>
            </input>
            <div className="space"></div>

            <input type="text"
                className="number-input"
                onChange={(event) => {onInputChange(this.props.emotion,`minSD`, event)}}>
            </input>
            
            <span>SD</span>
            <input type="text"
                className="number-input"
                onChange={(event) => {onInputChange(this.props.emotion,`maxSD`, event)}}>
            </input>
        </form>
    );
    }

}
export default NumberInput;