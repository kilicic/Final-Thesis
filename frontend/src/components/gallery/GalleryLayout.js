import React from "react";
import { Link } from "react-router-dom";
import './GalleryLayout.css'; 

function GalleryLayout() { 
    let data = [ 
        {
            id: 1,
            imgSrc: "images/Animals_011_h.jpg",
            vh: "h",
        },
        {
            id: 2,
            imgSrc: "images/Animals_025_h.jpg",
            vh: "h",

        },
        {
            id: 3,
            imgSrc: "images/Animals_178_v.jpg",
            vh: "v",

        },
        {
            id: 4,
            imgSrc: "images/Animals_039_h.jpg",
            vh: "h",
            
        },
        {
            id: 5,
            imgSrc: "images/Animals_041_h.jpg",
            vh: "h",

        }
        
    ]
    return (
        <div className="gallery">
           
            {data.map((item, index) => {
                
                if(item.vh==="v") {
                  return(
                    <figure className="pics" key={index}>
                        <Link to="/picture"><figcaption>{item.imgSrc.substring(7, item.imgSrc.length)}</figcaption></Link>
                        <Link to="/picture"><img src={item.imgSrc} style={{width: '80%', height: '60%'}} alt={item.imgSrc} /></Link>
                        
                    </figure>
                    )
                  } 
                else {
                    return(
                        <figure className="pics" key={index}>
                            <Link to="/picture"><figcaption >{item.imgSrc.substring(7, item.imgSrc.length)}</figcaption></Link>
                            <Link to="/picture"><img src={item.imgSrc} style={{width: '80%', height: '60%'}} alt={item.imgSrc} /></Link>
                            
                        </figure>
                        )

                }  
            })}

        </div>
    )

}
export default GalleryLayout;

/*
const GalleryLayout = () => { 
    return (

    )

}
export default GalleryLayout;
*/