import React, {Component} from "react";
import { groups } from "./groups.js";
import '../category/CategoryList.css';

class GroupList extends Component {
  constructor() { 
    super(); 
    this.state = {
      groupsChecked: ""
    }
  } 

  handleCheckbox = event => { 
    let checkedCat = event.target.value
    let previous = this.state.groupsChecked;
    if(previous.includes(checkedCat)) { 
      let newCat = previous.replace(checkedCat, '');
      this.setState({groupsChecked:newCat});
    }
    else {
      let helper = ""
      console.log(event.target.value)
      helper = checkedCat+ " "
      this.setState({groupsChecked:this.state.groupsChecked+helper});
    }    
  }
  render() {
    return(
      <div>
      <h1>Unesite skupinu ispitanika</h1>
      <ul className="checkbox-list">
             {groups.map(({ name, id }) => {
            return (
              <li key = {id}>
                <div className="category-list-item">
                    <input
                      type="checkbox"
                      id={id}
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
          <button className='button' onClick={()=>this.props.onClickSave("group", this.state.groupsChecked)}>Spremi</button>
          </div>
    )
  }
  
}
export default GroupList