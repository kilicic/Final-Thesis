import { Component } from 'react'
import TextInput from '../helpers/TextInput'
import './DescriptionForm.css'

class DescriptionForm extends Component { 
  constructor() { 
    super();
    this.state = { 
      optionField: "description",
      inputValue: ''
    }
  }
  onInputChange = (event) =>{
    this.setState({inputValue: event.target.value});
    /*console.log(this.state);*/
}
  render() {
  return(
    <div className='container-input'>
      <h1>Unesite opis</h1>
      <TextInput optionField = "description" onInputChange={this.onInputChange}></TextInput>
      <div className='frame-button'> 
        <hr/>
        <button className='button-desc' onClick={()=>this.props.onClickSave(this.state.optionField, this.state.inputValue)}>Spremi</button>
         </div>
    </div>
  )
  }
}
export default DescriptionForm;