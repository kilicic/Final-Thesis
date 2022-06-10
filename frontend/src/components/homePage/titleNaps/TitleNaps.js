import React, {Component} from "react";
import { BiSearchAlt} from "react-icons/bi";
import './TitleNaps.css'; 

class TitleNaps extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
            click : false
        }
    }
   
  render() {
    return(
        
        <div className="container-title">
            <div className="prvi"></div>
           
            <div className="drugi"><a href="https://link.springer.com/article/10.3758/s13428-013-0379-1" target="_blank"><h1 className="font-main">NAPS </h1></a>
            <h2 className="font-secondary">Pretraga fotografija  <BiSearchAlt onClick={()=>this.props.submitSearch()}/>
            </h2>
           </div>
           <div className="prvi">
               <button className="info" onClick={() => this.setState({click : !(this.state.click)})}>i</button>
               <div>
                   {this.state.click===true && <h5 className="info-text">Nencki Affective Picture System<br/>
                   Sustav koji se sastoji od visokokvalitetnih fotografija podijeljenih u pet kategorija (ljudi, lica, životinje, objekti i krajolici)
                   i normativnih ocjena dimenzionalnih i diskretnih emocija.<br/>
                   Za pretraživanje fotografija unesite željene parametre te pritisnite <BiSearchAlt />.<br/>
                   Pri pretraživanju prema ocjenama emocija, parametar "M" predstavlja srednju vrijednost ocjene, a "SD" standardnu derivaciju.
                   </h5>}
               </div>   
           </div>   
        </div>
    )
  }
}
export default TitleNaps;

/*<Link to="/gallery" className="button-icon" onClick={()=>this.props.submitSearch()}><BiSearchAlt /></Link>*/