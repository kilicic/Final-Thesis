import React, {Component} from "react";
import { categories } from "./categories";
import './CategoryList.css';

class CategoryList extends Component {
  constructor() { 
    super(); 
    this.state = {
     
    }
  }

  handleCheckbox = event => { 
    console.log(event.target.value)
    this.setState({categories: this.state.categories + event.target.value});
    console.log(this.state)
  }


  render() {  
    return (
      <div>
          <h1>Odaberite željenu kategoriju</h1>
          <ul className="checkbox-list">
           {categories.map(({ name, id }) => {
          return (
            <li key={id}>
              <div className="category-list-item">
                  <input
                    type="checkbox"
                    name={name}
                    value={id}
                    onChange={this.handleCheckbox}
                    /*onClick={()=>{
                      this.setState({categories: this.name})
                      console.log(this.value)
                    }}*/
                  /><label htmlFor={id}>{name}</label>
                </div>
            </li>
          );
        })}
        </ul> 
        <hr/>
        <button className='button'>Spremi</button>
      </div>
    );
      }
  }
  export default CategoryList;