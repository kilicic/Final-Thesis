import React from "react";
import {Link} from "react-router-dom";
import { IoMdArrowRoundBack} from "react-icons/io";
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

    const dataCount = () => {
        let id
        var shared = []
        for (let i =0; i < data.length; i++) {
            id = data[i]["id"]
            if(shared.includes(id)) continue;
            else {
                shared.push(id)
            }
        }

        return <>{shared.length}</>
    }

    const showPictures = () => {
        var shared = []
        var rows = []
        let picId
        let location
        let vhId
        let srcLocation
        if(data.length === 0) { 
            return <h3>Pretraživanje nije uspjelo. Nema Fotografija s traženim svojstvima!</h3>
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
        <div className='gallery-container'>
            <div className='title-gallery'>
                <div className='prvi-title'>
                  <Link to="/" className="navigate-button"><IoMdArrowRoundBack /></Link>
                </div>
                <div className='drugi-title'>
                    Dohvaćene fotografije ({dataCount()})
                </div>
                <div className='prvi-title'></div>
                </div>
                <div className="gallery">   
          {showPictures()}
        </div>
        </div>
    )

}
export default GalleryLayout;


