import React from "react";
import {Link} from "react-router-dom";
import './GalleryLayout.css';

const getDatafromLS=()=>{
    const data = sessionStorage.getItem("data");
    if(data){
      console.log(data)
      return JSON.parse(data);
    }
    else{
      return []
    }
  }


export const  GalleryLayout = () => {
    const data = getDatafromLS()
    console.log(data.length)

    const showPictures = () => {
        var shared = []
        var rows = []
        let picId
        let location
        let vhId
        let srcLocation
        if(data.length === 0) { 
            return <h1>Pretraživanje nije uspjelo. Nema Fotografija s traženim svojstvima.</h1>
        }
        else {
            for (let i =0; i < data.length; i++) { 
                console.log(data[i]["id"], data[i]["location"])
                picId = data[i]["id"]
                location = data[i]["location"] 
                vhId = location.charAt(location.length-1)
                srcLocation = location + ".jpg"
                console.log(picId, location, vhId) 
                if(shared.includes(picId)) continue;
                else {
                    shared.push(picId)

                    if ("v".includes(vhId)) {
           
                        rows.push(
                            <figure className="pics" key={picId}>
                                <Link to={"/picture"}
                                    state={{idPic: picId}}><img src={srcLocation} style={{width: '80%', height: '60%'}} alt={location} /></Link>  
                            </figure>
                        )
                        
                    }
                    else if ("h".includes(vhId)) {
         
                        rows.push(
                            <figure className="pics" key={picId}>
                                <Link to={"/picture"}
                                    state={{idPic: picId}}><img src={srcLocation} style={{width: '80%', height: '60%'}} alt={location} /></Link>
                                
                            </figure>
                            )
                    } 

                }
            
            
        }
        return <>{rows}</>
         
        
        }
    }
        
    return (
        <div className="gallery">   
          {showPictures()}
        </div>
    )

}
export default GalleryLayout;


