import React, { Component } from "react";
import './Picture.css';
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack} from "react-icons/io";
import { saveAs } from 'file-saver'

class Picture extends Component { 
  constructor() { 
    super();
  }
  render() {
    const downloadImage = () => {
        saveAs('images/Animals_178_v.jpg', 'image.jpg') 
      }
      /*sredi to tu da provjeri v i onda bira jedan od dva returna */
      let c = 1

      if(c===1) {
        return(
          <div className="picture-layout">
              <div className='pic-title'>
                  <div className='pic-title-prvi'>
                    <Link to="/gallery" className="navigate-button"><IoMdArrowRoundBack /></Link></div>
                  <div className='pic-title-drugi'>
                      Odabrana je fotografija naslov</div>
                  <div className='pic-title-prvi'></div>
              </div>
              <div className="pic-data-container-h">
              <div className="pic-display-h">
                <img src="images/Animals_011_h.jpg" className="pic-h-style" />
                <div className="buttons">
                  <button className="one-button" onClick={downloadImage}>Preuzmi</button>
                  <div className="space"></div>
                  <button className="one-button">Formatiraj</button>
                </div>
              </div>
              <div className="data-display-h">
              <div className="group-set">
                  <div className="title-group">EMOTION - MALE</div>
                  <div className="mean-display">
                  <div className="data-value">HappinessM: (1,02;1,02)</div>
                  <div className="data-value">FearM: (1,02;1,02)</div>
                  <div className="data-value">SadnessM: (1,02;1,02)</div>
                  <div className="data-value">SurpriseM: (1,02;1,02)</div>
                  <div className="data-value">DisgustM: (1,02;1,02)</div>
                  <div className="data-value">AngerM: (1,02;1,02)</div>
                  <div className="data-value">ValenceM_SAM: (1,02;1,02)</div>
                  <div className="data-value">ArousalM_SAM: (1,02;1,02)</div>              
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                  <div className="data-value">HappinessSD: (1,02;1,02)</div>
                  <div className="data-value">FearSD: (1,02;1,02)</div>
                  <div className="data-value">SadnessSD: (1,02;1,02)</div>
                  <div className="data-value">SurpriseSD: (1,02;1,02)</div>
                  <div className="data-value">DisgustSD: (1,02;1,02)</div>
                  <div className="data-value">AngerSD: (1,02;1,02)</div>
                  <div className="data-value">ValenceSD_SAM: (1,02;1,02)</div>
                  <div className="data-value">ArousalSD_SAM: (1,02;1,02)</div>              
                  </div>
                </div>
                <div className="group-set">
                  <div className="title-group">EMOTION - FEMALE</div>
                  <div className="mean-display">
                  <div className="data-value">HappinessM: (1,02;1,02)</div>
                  <div className="data-value">FearM: (1,02;1,02)</div>
                  <div className="data-value">Sadness: (1,02;1,02)</div>
                  <div className="data-value">SurpriseM: (1,02;1,02)</div>
                  <div className="data-value">DisgustM: (1,02;1,02)</div>
                  <div className="data-value">AngerM: (1,02;1,02)</div>
                  <div className="data-value">ValenceM_SAM: (1,02;1,02)</div>
                  <div className="data-value">ArousalSD_SAM: (1,02;1,02)</div>              
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                  <div className="data-value">HappinessSD: (1,02;1,02)</div>
                  <div className="data-value">FearSD: (1,02;1,02)</div>
                  <div className="data-value">SadnessSD: (1,02;1,02)</div>
                  <div className="data-value">SurpriseSD: (1,02;1,02)</div>
                  <div className="data-value">DisgustSD: (1,02;1,02)</div>
                  <div className="data-value">AngerSD: (1,02;1,02)</div>
                  <div className="data-value">ValenceSD_SAM: (1,02;1,02)</div>
                  <div className="data-value">ArousalSD_SAM: (1,02;1,02)</div>   
                  </div>
                </div>
                <div className="group-set">
                  <div className="title-group">EMOTION - ALL</div>
                  <div className="mean-display">
                  <div className="data-value">HappinessM: (1,02;1,02)</div>
                  <div className="data-value">FearM: (1,02;1,02)</div>
                  <div className="data-value">SadnessM: (1,02;1,02)</div>
                  <div className="data-value">SurpriseM: (1,02;1,02)</div>
                  <div className="data-value">DisgustM: (1,02;1,02)</div>
                  <div className="data-value">AngerM: (1,02;1,02)</div>
                  <div className="data-value">ValenceM_SAM: (1,02;1,02)</div>
                  <div className="data-value">ArousalM_SAM: (1,02;1,02)</div>              
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                  <div className="data-value">HappinessSD: (1,02;1,02)</div>
                  <div className="data-value">FearSD: (1,02;1,02)</div>
                  <div className="data-value">SadnessSD: (1,02;1,02)</div>
                  <div className="data-value">SurpriseSD: (1,02;1,02)</div>
                  <div className="data-value">DisgustSD: (1,02;1,02)</div>
                  <div className="data-value">AngerSD: (1,02;1,02)</div>
                  <div className="data-value">ValenceSD_SAM: (1,02;1,02)</div>
                  <div className="data-value">ArousalSD_SAM: (1,02;1,02)</div> 
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                  <div className="data-value">ValenceM: (1,02;1,02)</div>
                  <div className="data-value">ValenceSD: (1,02;1,02)</div>
                  <div className="data-value">ArousalM: (1,02;1,02)</div>
                  <div className="data-value">ArousalSD: (1,02;1,02)</div> 
                  <div className="data-value">AvApM: (1,02;1,02)</div>
                  <div className="data-value">AvApSD: (1,02;1,02)</div> 
                  </div>  
                </div>
              </div>
            </div>
            <div className="down">
            <div className="data-value">Opis:</div>
                <div className="data-value">Kategorija:</div>
             <div className="group-set">
             <div className="title-group">METADATA</div>
             <div className="mean-display">
                  <div className="data-value">Size: (1200x1600)</div>
                  <div className="data-value">JPEGsize: (640611)</div>
                  <div className="data-value">Luminance: (1,02;1,02)</div>
                  <div className="data-value">Contrast: (1,02;1,02)</div>
                  <div className="data-value">Labl: (1,02;1,02)</div>
                  <div className="data-value">Laba: (1,02;1,02)</div>
                  <div className="data-value">Labb: (1,02;1,02)</div>
                  <div className="data-value">Entropy: (1,02;1,02)</div>              
                  </div>  
             </div>
            </div>
          </div>
          
            

        )
      }

      if(c===2) {
        return (
          <div className="picture-layout">
              <div className='pic-title'>
                  <div className='pic-title-prvi'>
                    <Link to="/gallery" className="navigate-button"><IoMdArrowRoundBack /></Link></div>
                  <div className='pic-title-drugi'>
                      Odabrana je fotografija naslov</div>
                  <div className='pic-title-prvi'></div>
              </div>
              <div className="pic-data-container">
              <div className="pic-display-v">
              <img src="images/Animals_178_v.jpg" className="pic-v-style" />
              <div className="buttons">
                <button className="one-button" onClick={downloadImage}>Preuzmi</button>
                <div className="space"></div>
                <button className="one-button">Formatiraj</button>
                </div>
              </div>
              <div className="data-display-v">
  
                <div className="data-value">Opis:</div>
                <div className="data-value">Kategorija:</div>
              
                <div className="group-set">
                  <div className="title-group">EMOTION - MALE</div>
                  <div className="mean-display">
                  <div className="data-value">HappinessM: (1,02;1,02)</div>
                  <div className="data-value">FearM: (1,02;1,02)</div>
                  <div className="data-value">SadnessM: (1,02;1,02)</div>
                  <div className="data-value">SurpriseM: (1,02;1,02)</div>
                  <div className="data-value">DisgustM: (1,02;1,02)</div>
                  <div className="data-value">AngerM: (1,02;1,02)</div>
                  <div className="data-value">ValenceM_SAM: (1,02;1,02)</div>
                  <div className="data-value">ArousalM_SAM: (1,02;1,02)</div>              
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                  <div className="data-value">HappinessSD: (1,02;1,02)</div>
                  <div className="data-value">FearSD: (1,02;1,02)</div>
                  <div className="data-value">SadnessSD: (1,02;1,02)</div>
                  <div className="data-value">SurpriseSD: (1,02;1,02)</div>
                  <div className="data-value">DisgustSD: (1,02;1,02)</div>
                  <div className="data-value">AngerSD: (1,02;1,02)</div>
                  <div className="data-value">ValenceSD_SAM: (1,02;1,02)</div>
                  <div className="data-value">ArousalSD_SAM: (1,02;1,02)</div>              
                  </div>
                </div>
                <div className="group-set">
                  <div className="title-group">EMOTION - FEMALE</div>
                  <div className="mean-display">
                  <div className="data-value">HappinessM: (1,02;1,02)</div>
                  <div className="data-value">FearM: (1,02;1,02)</div>
                  <div className="data-value">Sadness: (1,02;1,02)</div>
                  <div className="data-value">SurpriseM: (1,02;1,02)</div>
                  <div className="data-value">DisgustM: (1,02;1,02)</div>
                  <div className="data-value">AngerM: (1,02;1,02)</div>
                  <div className="data-value">ValenceM_SAM: (1,02;1,02)</div>
                  <div className="data-value">ArousalSD_SAM: (1,02;1,02)</div>              
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                  <div className="data-value">HappinessSD: (1,02;1,02)</div>
                  <div className="data-value">FearSD: (1,02;1,02)</div>
                  <div className="data-value">SadnessSD: (1,02;1,02)</div>
                  <div className="data-value">SurpriseSD: (1,02;1,02)</div>
                  <div className="data-value">DisgustSD: (1,02;1,02)</div>
                  <div className="data-value">AngerSD: (1,02;1,02)</div>
                  <div className="data-value">ValenceSD_SAM: (1,02;1,02)</div>
                  <div className="data-value">ArousalSD_SAM: (1,02;1,02)</div>   
                  </div>
                </div>
                <div className="group-set">
                  <div className="title-group">EMOTION - ALL</div>
                  <div className="mean-display">
                  <div className="data-value">HappinessM: (1,02;1,02)</div>
                  <div className="data-value">FearM: (1,02;1,02)</div>
                  <div className="data-value">SadnessM: (1,02;1,02)</div>
                  <div className="data-value">SurpriseM: (1,02;1,02)</div>
                  <div className="data-value">DisgustM: (1,02;1,02)</div>
                  <div className="data-value">AngerM: (1,02;1,02)</div>
                  <div className="data-value">ValenceM_SAM: (1,02;1,02)</div>
                  <div className="data-value">ArousalM_SAM: (1,02;1,02)</div>              
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                  <div className="data-value">HappinessSD: (1,02;1,02)</div>
                  <div className="data-value">FearSD: (1,02;1,02)</div>
                  <div className="data-value">SadnessSD: (1,02;1,02)</div>
                  <div className="data-value">SurpriseSD: (1,02;1,02)</div>
                  <div className="data-value">DisgustSD: (1,02;1,02)</div>
                  <div className="data-value">AngerSD: (1,02;1,02)</div>
                  <div className="data-value">ValenceSD_SAM: (1,02;1,02)</div>
                  <div className="data-value">ArousalSD_SAM: (1,02;1,02)</div> 
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                  <div className="data-value">ValenceM: (1,02;1,02)</div>
                  <div className="data-value">ValenceSD: (1,02;1,02)</div>
                  <div className="data-value">ArousalM: (1,02;1,02)</div>
                  <div className="data-value">ArousalSD: (1,02;1,02)</div> 
                  <div className="data-value">AvApM: (1,02;1,02)</div>
                  <div className="data-value">AvApSD: (1,02;1,02)</div> 
                  </div>  
                </div>
                <div className="group-set">
                  <div className="title-group">METADATA</div>
                  <div className="mean-display">
                  <div className="data-value">Size: (1200x1600)</div>
                  <div className="data-value">JPEGsize: (640611)</div>
                  <div className="data-value">Luminance: (1,02;1,02)</div>
                  <div className="data-value">Contrast: (1,02;1,02)</div>
                  <div className="data-value">Labl: (1,02;1,02)</div>
                  <div className="data-value">Laba: (1,02;1,02)</div>
                  <div className="data-value">Labb: (1,02;1,02)</div>
                  <div className="data-value">Entropy: (1,02;1,02)</div>              
                  </div>  
                </div>
                
              </div>
              
              </div>
  
          </div>
      )
      }
      }
    
}
export default Picture;
