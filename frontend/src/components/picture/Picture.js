import React, {useState, useEffect} from "react";
import './Picture.css';
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowRoundBack} from "react-icons/io";
import { saveAs } from 'file-saver'

const Picture = () => { 
  const idPicVal= useLocation().state.idPic;
  console.log(idPicVal)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [orientation, setOrientation] = useState("")
  const [category, setCategory] = useState("")
  const [maleData, setMale] = useState({})
  const [femaleData, setFemale] = useState({})
  const [allData, setAll] = useState({})
  const [location, setLocation] = useState({})

  
  const downloadImage = () => {
      saveAs(location, name) 
  }

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    let str = generateTxt();
    const file = new Blob([str], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "EmotionML_Format.txt";
    document.body.appendChild(element);
    element.click();
  }

  const generateTxt = () => { 
    let str = '<emotionml version="1.0" xmlns="http://www.w3.org/2009/10/emotionml">\n';
    str = str + '   <info>\n';
    str = str + '      <meta:media-type>image</meta:media-type>\n'; 
    str = str + `      <meta:media-name>${name}</meta:media-name>\n`;
    str = str + `      <meta:media-set>NAPS database</meta:media-set>\n`;
    str = str + '   </info>\n';
    str = str + '   <emotion category-set="http://www.w3.org/TR/emotion-voc/xml#big6">\n';
    str = str + `      <category name="Happiness" value="${allData["happinessm"]}"/>\n`;   
    str = str + `      <category name="Fear" value="${allData["fearm"]}"/>\n`;   
    str = str + `      <category name="Sadness" value="${allData["sadnessm"]}"/>\n`;   
    str = str + `      <category name="Surprise" value="${allData["surprisem"]}"/>\n`;   
    str = str + `      <category name="Disgust" value="${allData["disgustm"]}"/>\n`;  
    str = str + `      <category name="Anger" value="${allData["angerm"]}"/>\n`;      
    str = str + '   </emotion>\n';
    str = str + `   <emotion dimension-set="http://www.w3.org/TR/emotion-voc/xml#pad-dimensions">\n`;
    str = str + `   <dimension name="arousal" value="${allData["arousalm"]}"/>\n`;
    str = str + `   <dimension name="valence" value="${allData["valencem"]}"/>\n`;
    str = str + '   </emotion>\n';
    str = str + '</emotionml>'
    
    

    
    
  
    return str;
  }

  const fetchData = () => { 

    fetch('http://localhost:5000/picture', {
                  method: 'post',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify({
                  id: idPicVal})
          })
          .then(res => res.json()).then(data => storeData(data))
  }

  const storeData = (data) => {
    console.log(data);
    let male = data[0];
    let female = data[1];
    let all = data[2];
    setMale(male)
    setFemale(female)
    setAll(all)
    let name = male["name"]
    let orientation = name.charAt(name.length-1)
    let cat = name.split("_")
    let category = cat[0]
    let description = male["description"]
    let location = "images/"+ name + ".jpg"
    setOrientation(orientation)
    setName(name)
    setCategory(category)
    setDescription(description)
    setLocation(location)
  }
  
  useEffect(() => {
    fetchData();
  }, []);

      /*sredi to tu da provjeri v i onda bira jedan od dva returna */

      if("h".includes(orientation)) {
        return(
          <div className="picture-layout">
              <div className='pic-title'>
                  <div className='pic-title-prvi'>
                    <Link to="/gallery" className="navigate-button"><IoMdArrowRoundBack /></Link></div>
                  <div className='pic-title-drugi'>
                      Odabrana je fotografija {name}</div>
                  <div className='pic-title-prvi'></div>
              </div>
              <div className="pic-data-container-h">
              <div className="pic-display-h">
                <img src={location} className="pic-h-style" />
                <div className="buttons">
                  <button className="one-button" onClick={downloadImage}>Preuzmi</button>
                  <div className="space"></div>
                  <button className="one-button" onClick={downloadTxtFile}>Formatiraj</button>
                </div>
              </div>
              <div className="data-display-h">
              <div className="group-set">
                  <div className="title-group">EMOTION - MALE</div>
                  <div className="mean-display">
                  <div className="data-value">HappinessM: ({maleData["happinessm"]})</div>
                  <div className="data-value">FearM: ({maleData["fearm"]})</div>
                  <div className="data-value">SadnessM: ({maleData["sadnessm"]})</div>
                  <div className="data-value">SurpriseM: ({maleData["surprisem"]})</div>
                  <div className="data-value">DisgustM: ({maleData["disgustm"]})</div>
                  <div className="data-value">AngerM: ({maleData["angerm"]})</div>
                  <div className="data-value">ValenceM_SAM:({maleData["valencem_sam"]})</div>
                  <div className="data-value">ArousalM_SAM: ({maleData["arousalm_sam"]})</div>              
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                  <div className="data-value">HappinessSD: ({maleData["happinesssd"]})</div>
                  <div className="data-value">FearSD: ({maleData["fearsd"]})</div>
                  <div className="data-value">SadnessSD: ({maleData["sadnesssd"]})</div>
                  <div className="data-value">SurpriseSD: ({maleData["surprisesd"]})</div>
                  <div className="data-value">DisgustSD: ({maleData["disgustsd"]})</div>
                  <div className="data-value">AngerSD: ({maleData["angersd"]})</div>
                  <div className="data-value">ValenceSD_SAM:({maleData["valencesd_sam"]})</div>
                  <div className="data-value">ArousalSD_SAM: ({maleData["arousalsd_sam"]})</div>                 
                  </div>
                </div>
                <div className="group-set">
                  <div className="title-group">EMOTION - FEMALE</div>
                  <div className="mean-display">
                  <div className="data-value">HappinessM: ({femaleData["happinessm"]})</div>
                  <div className="data-value">FearM: ({femaleData["fearm"]})</div>
                  <div className="data-value">SadnessM: ({femaleData["sadnessm"]})</div>
                  <div className="data-value">SurpriseM: ({femaleData["surprisem"]})</div>
                  <div className="data-value">DisgustM: ({femaleData["disgustm"]})</div>
                  <div className="data-value">AngerM: ({femaleData["angerm"]})</div>
                  <div className="data-value">ValenceM_SAM:({femaleData["valencem_sam"]})</div>
                  <div className="data-value">ArousalM_SAM: ({femaleData["arousalm_sam"]})</div>                    
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                  <div className="data-value">HappinessSD: ({femaleData["happinesssd"]})</div>
                  <div className="data-value">FearSD: ({femaleData["fearsd"]})</div>
                  <div className="data-value">SadnessSD: ({femaleData["sadnesssd"]})</div>
                  <div className="data-value">SurpriseSD: ({femaleData["surprisesd"]})</div>
                  <div className="data-value">DisgustSD: ({femaleData["disgustsd"]})</div>
                  <div className="data-value">AngerSD: ({femaleData["angersd"]})</div>
                  <div className="data-value">ValenceSD_SAM:({femaleData["valencesd_sam"]})</div>
                  <div className="data-value">ArousalSD_SAM: ({femaleData["arousalsd_sam"]})</div>         
                  </div>
                </div>
                <div className="group-set">
                  <div className="title-group">EMOTION - ALL</div>
                  <div className="mean-display">
                  <div className="data-value">HappinessM: ({allData["happinessm"]})</div>
                  <div className="data-value">FearM: ({allData["fearm"]})</div>
                  <div className="data-value">SadnessM: ({allData["sadnessm"]})</div>
                  <div className="data-value">SurpriseM: ({allData["surprisem"]})</div>
                  <div className="data-value">DisgustM: ({allData["disgustm"]})</div>
                  <div className="data-value">AngerM: ({allData["angerm"]})</div>
                  <div className="data-value">ValenceM_SAM:({allData["valencem_sam"]})</div>
                  <div className="data-value">ArousalM_SAM: ({allData["arousalm_sam"]})</div>     
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                  <div className="data-value">HappinessSD: ({allData["happinesssd"]})</div>
                  <div className="data-value">FearSD: ({allData["fearsd"]})</div>
                  <div className="data-value">SadnessSD: ({allData["sadnesssd"]})</div>
                  <div className="data-value">SurpriseSD: ({allData["surprisesd"]})</div>
                  <div className="data-value">DisgustSD: ({allData["disgustsd"]})</div>
                  <div className="data-value">AngerSD: ({allData["angersd"]})</div>
                  <div className="data-value">ValenceSD_SAM:({allData["valencesd_sam"]})</div>
                  <div className="data-value">ArousalSD_SAM: ({allData["arousalsd_sam"]})</div>   
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                  <div className="data-value">ValenceM: ({allData["valencem"]})</div>
                  <div className="data-value">ValenceSD: ({allData["valencesd"]})</div>
                  <div className="data-value">ArousalM: ({allData["arousalm"]})</div>
                  <div className="data-value">ArousalSD: ({allData["arousalsd"]})</div> 
                  <div className="data-value">AvApM: ({allData["avapm"]})</div>
                  <div className="data-value">AvApSD: ({allData["avapsd"]})</div> 
                  </div>  
                </div>
              </div>
            </div>
            <div className="down">
            <div className="data-value">Opis: {description}</div>
                <div className="data-value">Kategorija: {category} </div>
             <div className="group-set">
             <div className="title-group">METADATA</div>
             <div className="mean-display">
                  <div className="data-value">Dimensions: ({allData["width"]}x{allData["height"]})</div>
                  <div className="data-value">JPEGsize: ({allData["jpegsize"]})</div>
                  <div className="data-value">Luminance: ({allData["luminance"]})</div>
                  <div className="data-value">Contrast: ({allData["contrast"]})</div>
                  <div className="data-value">Labl: ({allData["labl"]})</div>
                  <div className="data-value">Laba: ({allData["laba"]})</div>
                  <div className="data-value">Labb: ({allData["labb"]})</div>
                  <div className="data-value">Entropy: ({allData["entropy"]})</div>              
                  </div>  
             </div>
            </div>
          </div>
        )
      }

      if("v".includes(orientation)) {
        return (
          <div className="picture-layout">
              <div className='pic-title'>
                  <div className='pic-title-prvi'>
                    <Link to="/gallery" className="navigate-button"><IoMdArrowRoundBack /></Link></div>
                  <div className='pic-title-drugi'>
                      Odabrana je fotografija {name}</div>
                  <div className='pic-title-prvi'></div>
              </div>
              <div className="pic-data-container">
              <div className="pic-display-v">
              <img src={location} className="pic-v-style" />
              <div className="buttons">
                <button className="one-button" onClick={downloadImage}>Preuzmi</button>
                <div className="space"></div>
                <button className="one-button" onClick={downloadTxtFile}>Formatiraj</button>
                </div>
              </div>
              <div className="data-display-v">
  
                <div className="data-value">Opis: {description}</div>
                <div className="data-value">Kategorija: {category}</div>
              
                <div className="group-set">
                  <div className="title-group">EMOTION - MALE</div>
                  <div className="mean-display">
                  <div className="data-value">HappinessM: ({maleData["happinessm"]})</div>
                  <div className="data-value">FearM: ({maleData["fearm"]})</div>
                  <div className="data-value">SadnessM: ({maleData["sadnessm"]})</div>
                  <div className="data-value">SurpriseM: ({maleData["surprisem"]})</div>
                  <div className="data-value">DisgustM: ({maleData["disgustm"]})</div>
                  <div className="data-value">AngerM: ({maleData["angerm"]})</div>
                  <div className="data-value">ValenceM_SAM:({maleData["valencem_sam"]})</div>
                  <div className="data-value">ArousalM_SAM: ({maleData["arousalm_sam"]})</div>                 
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                  <div className="data-value">HappinessSD: ({maleData["happinesssd"]})</div>
                  <div className="data-value">FearSD: ({maleData["fearsd"]})</div>
                  <div className="data-value">SadnessSD: ({maleData["sadnesssd"]})</div>
                  <div className="data-value">SurpriseSD: ({maleData["surprisesd"]})</div>
                  <div className="data-value">DisgustSD: ({maleData["disgustsd"]})</div>
                  <div className="data-value">AngerSD: ({maleData["angersd"]})</div>
                  <div className="data-value">ValenceSD_SAM:({maleData["valencesd_sam"]})</div>
                  <div className="data-value">ArousalSD_SAM: ({maleData["arousalsd_sam"]})</div>                
                  </div>
                </div>
                <div className="group-set">
                  <div className="title-group">EMOTION - FEMALE</div>
                  <div className="mean-display">
                  <div className="data-value">HappinessM: ({femaleData["happinessm"]})</div>
                  <div className="data-value">FearM: ({femaleData["fearm"]})</div>
                  <div className="data-value">SadnessM: ({femaleData["sadnessm"]})</div>
                  <div className="data-value">SurpriseM: ({femaleData["surprisem"]})</div>
                  <div className="data-value">DisgustM: ({femaleData["disgustm"]})</div>
                  <div className="data-value">AngerM: ({femaleData["angerm"]})</div>
                  <div className="data-value">ValenceM_SAM:({femaleData["valencem_sam"]})</div>
                  <div className="data-value">ArousalM_SAM: ({femaleData["arousalm_sam"]})</div>        
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                  <div className="data-value">HappinessSD: ({femaleData["happinesssd"]})</div>
                  <div className="data-value">FearSD: ({femaleData["fearsd"]})</div>
                  <div className="data-value">SadnessSD: ({femaleData["sadnesssd"]})</div>
                  <div className="data-value">SurpriseSD: ({femaleData["surprisesd"]})</div>
                  <div className="data-value">DisgustSD: ({femaleData["disgustsd"]})</div>
                  <div className="data-value">AngerSD: ({femaleData["angersd"]})</div>
                  <div className="data-value">ValenceSD_SAM:({femaleData["valencesd_sam"]})</div>
                  <div className="data-value">ArousalSD_SAM: ({femaleData["arousalsd_sam"]})</div> 
                  </div>
                </div>
                <div className="group-set">
                  <div className="title-group">EMOTION - ALL</div>
                  <div className="mean-display">
                  <div className="data-value">HappinessM: ({allData["happinessm"]})</div>
                  <div className="data-value">FearM: ({allData["fearm"]})</div>
                  <div className="data-value">SadnessM: ({allData["sadnessm"]})</div>
                  <div className="data-value">SurpriseM: ({allData["surprisem"]})</div>
                  <div className="data-value">DisgustM: ({allData["disgustm"]})</div>
                  <div className="data-value">AngerM: ({allData["angerm"]})</div>
                  <div className="data-value">ValenceM_SAM:({allData["valencem_sam"]})</div>
                  <div className="data-value">ArousalM_SAM: ({allData["arousalm_sam"]})</div>     
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                  <div className="data-value">HappinessSD: ({allData["happinesssd"]})</div>
                  <div className="data-value">FearSD: ({allData["fearsd"]})</div>
                  <div className="data-value">SadnessSD: ({allData["sadnesssd"]})</div>
                  <div className="data-value">SurpriseSD: ({allData["surprisesd"]})</div>
                  <div className="data-value">DisgustSD: ({allData["disgustsd"]})</div>
                  <div className="data-value">AngerSD: ({allData["angersd"]})</div>
                  <div className="data-value">ValenceSD_SAM:({allData["valencesd_sam"]})</div>
                  <div className="data-value">ArousalSD_SAM: ({allData["arousalsd_sam"]})</div>   
                  </div>
                  <div><hr></hr></div>
                  <div className="mean-display">
                <div className="mean-display">
                  <div className="data-value">ValenceM: ({allData["valencem"]})</div>
                  <div className="data-value">ValenceSD: ({allData["valencesd"]})</div>
                  <div className="data-value">ArousalM: ({allData["arousalm"]})</div>
                  <div className="data-value">ArousalSD: ({allData["arousalsd"]})</div> 
                  <div className="data-value">AvApM: ({allData["avapm"]})</div>
                  <div className="data-value">AvApSD: ({allData["avapsd"]})</div>  
                  </div>  
                </div>
                <div className="group-set">
                  <div className="title-group">METADATA</div>
                  <div className="mean-display">
                  <div className="data-value">Dimensions: ({allData["width"]}x{allData["height"]})</div>
                  <div className="data-value">JPEGsize: ({allData["jpegsize"]})</div>
                  <div className="data-value">Luminance: ({allData["luminance"]})</div>
                  <div className="data-value">Contrast: ({allData["contrast"]})</div>
                  <div className="data-value">Labl: ({allData["labl"]})</div>
                  <div className="data-value">Laba: ({allData["laba"]})</div>
                  <div className="data-value">Labb: ({allData["labb"]})</div>
                  <div className="data-value">Entropy: ({allData["entropy"]})</div>                 
                  </div>  
                </div>
                
              </div>
              </div>
              </div>
              </div>
  
          
      )
      
      }
    

      
    
}
export default Picture;


/*
const fetchData = async () => { 
    try {
      const res = await fetch('http://localhost:5000/picture', {
                  method: 'post',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify({
                  id: idPicVal})
                  });  
      const dataRes = res.json()
      console.log(dataRes)
  }
    catch(err) {
      console.err(err.message);
    }
  }
 */
