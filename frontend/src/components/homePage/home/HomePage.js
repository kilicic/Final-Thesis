import React, {Component} from "react"
import TitleNaps from "../titleNaps/TitleNaps"
import NavigationBar from "../navigationBar/NavigationBar"
import CategoryList from "../category/CategoryList"
import DescriptionForm from '../description/DescriptionForm'
import NameForm from "../name/NameForm"
import './HomePage.css'
import BeForm from "../basicEmotion/BeForm"
import DimEmForm from "../dimensionalEmotion/DimEmForm"
import GroupList from "../sex/Sex"

class HomePage extends Component { 
 
  constructor(props) { 
      super(props); 
      this.state =  { 
          active: " "
      }
  }    
   render() {
    return(
        <div  className="sve">
        <TitleNaps></TitleNaps>
        <NavigationBar>
            <button className="icon-button" onClick={() => this.setState({active: "categoryList"})}>Kategorija</button>
            <button className="icon-button" onClick={() => this.setState({active: "sexList"})}>Spol</button>
            <button className="icon-button" onClick={() => this.setState({active: "dimEm"})}>Dimenzijske emocije</button>
            <button className="icon-button" onClick={() => this.setState({active: "basicEm"})}>Diskretne emocije</button>
            <button className="icon-button" onClick={() => this.setState({active: "description"})}>Opis</button>
            <button className="icon-button" onClick={() => this.setState({active: "name"})}>Naziv</button>
        </NavigationBar>
        <div className="container">
       
            {this.state.active === "categoryList" && <CategoryList></CategoryList>}
            {this.state.active === "sexList" && <GroupList></GroupList>}
            {this.state.active === "dimEm" && <DimEmForm></DimEmForm>}
            {this.state.active === "basicEm" && <BeForm></BeForm>}
            {this.state.active === "name" && <NameForm></NameForm>}
            {this.state.active === "description" && <DescriptionForm></DescriptionForm>}
        </div>
        </div>
    );
   }

}

export default HomePage;


