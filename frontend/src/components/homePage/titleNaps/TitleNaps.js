import React, {useState} from "react";
import { BiSearchAlt} from "react-icons/bi";
import './TitleNaps.css'; 
import { Link } from "react-router-dom";



export default function TitleNaps() { 
    const [click, setClick] = useState(false);
  
    return(
        
        <div className="container-title">
            <div className="prvi"></div>
            <div className="drugi"><h1 className="font-main">NAPS </h1>
            <h2 className="font-secondary">Pretraga fotografija 
            <Link to="/gallery" className="button-icon"><BiSearchAlt /></Link></h2>
           </div>
           <div className="prvi">
               <button className="info" onClick={() => setClick(!click)}>i</button>
               <div>
                   {click===true && <h5 className="info-text">Nencki Affective Picture System<br/>
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