import { Component } from 'react'
import NumberInput from '../helpers/NumberInput'
import './DimEmForm.css'


class DimEmForm extends Component { 
  constructor() { 
    super();
    this.state = {
      arousal: { 
        minM: '', 
        maxM: '',
        minSD: '',
        maxSD: ''
      }, 
      valence: { 
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
          <div className='title'>Valence</div>
      <NumberInput emotion="valence" onInputChange = {this.onInputChange}></NumberInput>
 
      </div>
      
      <div className='element'>
      <div className='title'>Arousal</div>
      <NumberInput emotion="arousal" onInputChange = {this.onInputChange}></NumberInput>
      </div>
   
      <div className='frame'>
        <hr/>
      <button className='button' onClick={()=>this.props.onClickSave("de", this.state)}>Spremi</button>
      </div>
      </div>
    </div>
  )
  }
}
export default DimEmForm;