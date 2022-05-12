import React, {Component} from "react";
import './TextInput.css'

class TextInput extends Component {
    constructor(props) { 
        super(props);
        this.state = { 
            optionField: props.optionField,
            inputValue: " "
        }
    }
    
   
   render() {
    return (
        <div className="form-center">
        <form className="form-input">
            <input type="text" className="text-input"
            onChange={this.props.onInputChange}>
            </input>
        </form>
        <div className='frame-button'> 
        <hr/>
        <button className='button-desc'>Spremi</button>
         </div>

        </div>
    );
   }
}
export default TextInput;
