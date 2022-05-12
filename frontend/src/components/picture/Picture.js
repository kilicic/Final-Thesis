import React from "react";
import './Picture.css';
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack} from "react-icons/io";

import { saveAs } from 'file-saver'

function Picture() { 
    const downloadImage = () => {
        saveAs('images/Animals_178_v.jpg', 'image.jpg') 
      }
    return (
        <div className="picture-layout">
            <div className='pic-title'>
                <div className='pic-title-prvi'>
                  <Link to="/gallery" className="navigate-button"><IoMdArrowRoundBack /></Link></div>
                <div className='pic-title-drugi'>
                    Odabrana je fotografija naslov</div>
                <div className='pic-title-prvi'></div>
            </div>
            <div className="pic-display">
            <img src="images/Animals_178_v.jpg" className="pic-v-style" />
            </div>
            <div className="buttons">
              <button className="one-button" onClick={downloadImage}>Preuzmi</button>
              <div className="space"></div>
              <button className="one-button">Detaljnije</button>
            


            </div>

        </div>
    )

}
export default Picture;
