import NumberInput from '../helpers/NumberInput'
import './DimEmForm.css'


export default function BeForm() { 
  return(
    <div >
      <h1>Unesite vrijednosti</h1>
      <div className='containerForm'>
          <div className='element'>
          <div className='title'>Valence</div>
      <NumberInput emotion="valence"></NumberInput>
 
      </div>
      
      <div className='element'>
      <div className='title'>Arousal</div>
      <NumberInput emotion="arousal"></NumberInput>
      </div>
   
      <div className='frame'>
        <hr/>
      <button className='button'>Spremi</button>
      </div>
      </div>
    </div>
  )
}