import { Component } from 'react'
import TextInput from '../helpers/TextInput'
import './DescriptionForm.css'

class DescriptionForm extends Component { 
  constructor() { 
    super();
    this.state = { 
      optionField: "descripton",
      inputValue: ''
    }
  }
  onInputChange = (event) =>{
    this.setState({inputValue: event.target.value});
    console.log(this.state);
}
  render() {
  return(
    <div className='container-input'>
      <h1>Unesite opis</h1>
      <TextInput optionField = "description" onInputChange={this.onInputChange}></TextInput>
    </div>
  )
  }
}
export default DescriptionForm;