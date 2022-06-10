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
          active: " ", 
          name: "", 
          description: "", 
          happiness: "",
          fear: "",
          sadness: "", 
          surprise: "",  
          disgust: "", 
          anger: "", 
          arousal: "",
          valence: "",
          approachavoidance:"", 
          category: "", 
          group: "", 
      }
  } 
  
  onClickSave = (input1, input2) =>{
      if(input1==="name") {
        this.setState({name: input2});
      }
      else if(input1==="description") { 
        this.setState({description: input2});
      }
      else if(input1==="be") {
          let emotions = ["happiness", "fear", "sadness", "surprise", "disgust", "anger"]
          let attributes = ["minM", "maxM", "minSD", "maxSD"]
          for(let emo of emotions) {
            let currentEmotion = input2[emo]
            let upis = ""
            for(let attr of attributes) {
                   upis += attr + " " + currentEmotion[attr] + "; "
                   switch (emo) { 
                       case "happiness": 
                           this.setState({happiness:upis.substring(0,upis.length-2)})
                           break;
                       case "fear":
                           this.setState({fear:upis.substring(0,upis.length-2)})
                           break;
                       case "sadness":
                            this.setState({sadness:upis.substring(0,upis.length-2)})
                            break; 
                       case "surprise":
                            this.setState({surprise:upis.substring(0,upis.length-2)})
                            break;
                       case "disgust":
                            this.setState({disgust:upis.substring(0,upis.length-2)}) 
                            break;
                       case "anger":
                            this.setState({anger:upis.substring(0,upis.length-2)})
                            break;
                        default:
                            console.log(emo);
                   }
                   
                }
        }  
      }
      else if(input1==="de") {
        let emotions = ["valence", "arousal", "approachavoidance"]
        let attributes = ["minM", "maxM", "minSD", "maxSD"]
        for(let emo of emotions) {
          let currentEmotion = input2[emo]
          let upis = ""
          for(let attr of attributes) {
                 upis += attr + " " + currentEmotion[attr] + "; "
                 switch (emo) { 
                     case "valence": 
                         this.setState({valence:upis.substring(0,upis.length-2)})
                         break;
                     case "arousal":
                         this.setState({arousal:upis.substring(0,upis.length-2)})
                         break;
                     case "approachavoidance":
                         this.setState({approachavoidance:upis.substring(0,upis.length-2)})
                         break;
                      default:
                          console.log(emo);
                 }
                 
              }
      }  
      }
      else if(input1 === "category") { 
          this.setState({category: input2.substring(0,input2.length-1)})

      }
      else if(input1 === "group") { 
        this.setState({group:input2.substring(0,input2.length-1)})

      }
      console.log(this.state)   
  }

    submitSearch = () => { 
    fetch('http://localhost:5000/gallery', {
        method: 'post',
        headers: {'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: this.state.name,
            description: this.state.description,
            happiness: this.state.happiness,
            fear: this.state.fear,
            sadness: this.state.sadness,
            surprise: this.state.surprise,  
            disgust: this.state.disgust,
            anger: this.state.anger,
            arousal: this.state.arousal,
            valence: this.state.valence,
            approachavoidance: this.state.approachavoidance, 
            category: this.state.category, 
            group: this.state.group
        })
    }).then(res => res.json()).then(data => this.changePage(data))
}

changePage(data) {
    console.log(data)
    sessionStorage.setItem("data",JSON.stringify(data))
    window.location.href="/gallery";
}


   render() {
    return(
        <div  className="sve">
        <TitleNaps submitSearch={this.submitSearch}></TitleNaps>
        <NavigationBar>
            <button className="icon-button" onClick={() => this.setState({active: "categoryList"})}>Kategorija</button>
            <button className="icon-button" onClick={() => this.setState({active: "sexList"})}>Spol</button>
            <button className="icon-button" onClick={() => this.setState({active: "dimEm"})}>Dimenzijske emocije</button>
            <button className="icon-button" onClick={() => this.setState({active: "basicEm"})}>Diskretne emocije</button>
            <button className="icon-button" onClick={() => this.setState({active: "description"})}>Opis</button>
            <button className="icon-button" onClick={() => this.setState({active: "name"})}>Naziv</button>
        </NavigationBar>
        <div className="container">
       
            {this.state.active === "categoryList" && <CategoryList onClickSave = {this.onClickSave}></CategoryList>}
            {this.state.active === "sexList" && <GroupList onClickSave = {this.onClickSave}></GroupList>}
            {this.state.active === "dimEm" && <DimEmForm onClickSave = {this.onClickSave}></DimEmForm>}
            {this.state.active === "basicEm" && <BeForm onClickSave = {this.onClickSave}></BeForm>}
            {this.state.active === "name" && <NameForm onClickSave = {this.onClickSave}></NameForm>}
            {this.state.active === "description" && <DescriptionForm onClickSave = {this.onClickSave}></DescriptionForm>}
        </div>
        </div>
    );
   }

}

export default HomePage;


