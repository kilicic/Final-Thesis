import React, {Component} from "react";
import { categories } from "./categories";
import './CategoryList.css';

class CategoryList extends Component {
  constructor() { 
    super(); 
    this.state = {
      categories: ""
       
    }
  }

  handleCheckbox = event => { 
    let checkedCat = event.target.value
    let previous = this.state.categories;
    if(previous.includes(checkedCat)) { 
      let newCat = previous.replace(checkedCat, '');
      this.setState({categories:newCat});
    }
    else {
      let helper = ""
      console.log(event.target.value)
      helper = checkedCat+ " "
      this.setState({categories:this.state.categories+helper});
    }
    
   
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
                  /><label htmlFor={id}>{name}</label>
                </div>
            </li>
          );
        })}
        </ul> 
        <hr/>
        <button className='button' onClick={()=>this.props.onClickSave("category", this.state.categories)}>Spremi</button>
      </div>
    );
      }
  }
  export default CategoryList;