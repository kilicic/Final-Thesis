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
    /*console.log(this.state);*/
}
 
  render() {
  return(
    <div className='container-input'>
      <h1>Unesite naziv</h1>
      <TextInput optionField = "name" onInputChange = {this.onInputChange}></TextInput>
      <div className='frame-button'> 
        <hr/>
        <button className='button-desc' onClick={()=>this.props.onClickSave(this.state.optionField, this.state.inputValue)}>Spremi</button>
         </div>
    </div>
  )
}
}
export default NameForm;