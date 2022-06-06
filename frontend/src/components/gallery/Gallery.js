import React from 'react';
import GalleryLayout from './GalleryLayout';
import { IoMdArrowRoundBack} from "react-icons/io";
import { Link } from 'react-router-dom';


function Gallery() {
  
    return (
        <div className='gallery-container'>
            <div className='title-gallery'>
                <div className='prvi-title'>
                  <Link to="/" className="navigate-button"><IoMdArrowRoundBack /></Link>
                </div>
                <div className='drugi-title'>
                    Fotografije
                </div>
                <div className='prvi-title'></div>
                </div>
            
            <GalleryLayout></GalleryLayout>
        </div>
      
  
      
  
    );
  }
  
  export default Gallery;
  