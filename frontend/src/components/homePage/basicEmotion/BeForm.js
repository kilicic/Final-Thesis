import React, { Component } from 'react'
import NumberInput from '../helpers/NumberInput'
import './BeForm.css'


class BeForm extends Component { 
  constructor() { 
    super();
    this.state = {
      happiness: { 
        minM: '', 
        maxM: '',
        minSD: '',
        maxSD: ''
      }, 
      fear: { 
        minM: '', 
        maxM: '',
        minSD: '',
        maxSD: ''
      }, 
      sadness: { 
        minM: '', 
        maxM: '',
        minSD: '',
        maxSD: ''
      }, 
      surprise: { 
        minM: '', 
        maxM: '',
        minSD: '',
        maxSD: ''
      },  
      disgust: { 
        minM: '', 
        maxM: '',
        minSD: '',
        maxSD: ''
      }, 
      anger: { 
        minM: '', 
        maxM: '',
        minSD: '',
        maxSD: ''
      }
  }

  }
  onInputChange = (key, attribute, event) => {
    let keyAttribute = this.state[key]
    /*console.log(keyAttribute)*/
    keyAttribute[attribute]=event.target.value
    this.setState({[key]: keyAttribute })
    /*console.log(this.state)*/
    
}

  render() {
  return(
    <div >
      <h1>Unesite vrijednosti</h1>
      <div className='containerForm'>
          <div className='element'>
          <div className='title'>Happiness</div>
      <NumberInput emotion="happiness" onInputChange = {this.onInputChange}></NumberInput>
 
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
      <button className='button' onClick={()=>this.props.onClickSave("be", this.state)}>Spremi</button>
      </div>
      </div>
    </div>
  )
  }
}
export default BeForm;