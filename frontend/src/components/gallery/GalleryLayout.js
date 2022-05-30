import React from "react";
import { Link } from "react-router-dom";
import './GalleryLayout.css';
import { images } from "./images.js";

function GalleryLayout() { 
  
    return (
        <div className="gallery">
           
            {images.map((item, index) => {
                
                if(item.vh==="v") {
                  return(
                    <figure className="pics" key={index}>
                        <Link to={`/picture`}><figcaption>{item.imgSrc.substring(7, item.imgSrc.length)}</figcaption></Link>
                        <Link to={`/picture`}><img src={item.imgSrc} style={{width: '80%', height: '60%'}} alt={item.imgSrc} /></Link>
                        
                    </figure>
                    )
                  } 
                else {
                    return(
                        <figure className="pics" key={index}>
                            <Link to={`/picture`}><figcaption >{item.imgSrc.substring(7, item.imgSrc.length)}</figcaption></Link>
                            <Link to={`/picture`}><img src={item.imgSrc} style={{width: '80%', height: '60%'}} alt={item.imgSrc} /></Link>
                            
                        </figure>
                        )

                }  
            })}

        </div>
    )

}
export default GalleryLayout;

