import React, { Component } from 'react'
import NumberInput from '../helpers/NumberInput'
import './BeForm.css'


class BeForm extends Component { 
  constructor() { 
    super();

  }
  onInputChange = (key, event) => {
    this.setState({[key] : event.target.value})
    console.log(`SET ${key} as: ${event.target.value}`)
    console.log(this.state)
}

  render() {
  return(
    <div >
      <h1>Unesite vrijednosti</h1>
      <div className='containerForm'>
          <div className='element'>
          <div className='title'>Happiness</div>
      <NumberInput emotion="happines" onInputChange = {this.onInputChange}></NumberInput>
 
      </div>
      
      <div className='element'>
      <div className='title'>Fear</div>
      <NumberInput emotion = "fear" onInputChange = {this.onInputChange}></NumberInput>
      </div>
   
      <div className='element'>
      <div className='title'>Sadness</div>
      <NumberInput emotion = "sadness" onInputChange = {this.onInputChange}></NumberInput>
      </div>
 
      <div className='element'>
      <div className='title'>Surprise</div>
      <NumberInput emotion = "surprise" onInputChange = {this.onInputChange}></NumberInput>
      </div>

      <div className='element'>
      <div className='title'>Disgust</div>
      <NumberInput emotion = "disgust" onInputChange = {this.onInputChange}></NumberInput>
      </div>

      <div className='element'>
      <div className='title'>Anger</div>
      <NumberInput emotion = "anger" onInputChange = {this.onInputChange}></NumberInput>
      </div>
      
      <div className='frame'>
      <hr/>
      <button className='button'>Spremi</button>
      </div>
      </div>
    </div>
  )
  }
}
export default BeForm;