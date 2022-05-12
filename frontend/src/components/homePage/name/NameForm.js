import { Component } from 'react'
import TextInput from '../helpers/TextInput'

class NameForm extends Component { 
  constructor() { 
    super();
    this.state = { 
      optionField: "name",
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
      <h1>Unesite naziv</h1>
      <TextInput optionField = "name" onInputChange = {this.onInputChange}></TextInput>
    </div>
  )
}
}
export default NameForm;