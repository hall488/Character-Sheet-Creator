import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft, faChevronRight);

const avatar = document.querySelector("#avatar");

function AvatarCreator() {
    return (
        <div style={{display: "flex", alignItems: "flex-end", flexDirection: "column", gap: "8px"}}>
        <HairSelector array={["hair-1", "hair-2", "hair-3"]}/>
        <HairColor/>
        <EyeColor/>
        <SkinColor/>
        <ShirtColor/>
        </div>
  )
}

function HairSelector({array}) {

    let [index, setIndex] = useState(0);
    
    const hair1 = avatar.querySelector("#hair-1");
    const hair2front = avatar.querySelector("#hair-2-front");
    const hair2back = avatar.querySelector("#hair-2-back");
    const hair3 = avatar.querySelector("#hair-3");
  
    const addIndex = () => {
      setIndex(index >= array.length - 1 ? 0 : index + 1);
    }
  
    const subIndex = () => {
      setIndex(index <= 0 ? array.length - 1 : index - 1);
    }
  
    hair1.style.fillOpacity = "0";
    hair2front.style.fillOpacity = "0";
    hair2back.style.fillOpacity = "0";
    hair3.style.fillOpacity = "0";
  
    switch(index) {
      case 0:
        hair1.style.fillOpacity = "1";
        break;
      case 1: 
        hair2front.style.fillOpacity = "1";
        hair2back.style.fillOpacity = "1";
        break;
      case 2: 
        hair3.style.fillOpacity = "1";
        break;
    }
  
    return (
      <div style={{display: "flex", alignItems: "center", gap: "1em"}}>
        Hair Style :
        <FontAwesomeIcon icon="chevron-left" onClick={subIndex}/>
        <div style ={{userSelect: "none"}}>{array[index]}</div>
        <FontAwesomeIcon icon="chevron-right" onClick={addIndex}/>
      </div>
    )
  }
  
  function HairColor() {
    let [color, setColor] = useState("#fbd83a");
  
    const handleChange = (e) => {
      setColor(e.target.value);
    }
  
    const hair1 = avatar.querySelector("#hair-1");
    const hair2front = avatar.querySelector("#hair-2-front");
    const hair2back = avatar.querySelector("#hair-2-back");
    const hair3 = avatar.querySelector("#hair-3");
  
    hair1.style.fill = color;
    hair2front.style.fill = color;
    hair2back.style.fill = color;
    hair3.style.fill = color;
  
    return (
      <div style={{display: "flex", alignItems: "center", gap: "1em"}}>
        Hair Color :
        <input type="color" value={color} onChange={handleChange}/>
      </div>
    )
  }
  
  function EyeColor() {
  
    let [color, setColor] = useState("#22ffff");
  
    const handleChange = (e) => {
      setColor(e.target.value);
    }
  
    document.querySelector("#eyes").style.stroke = color;
  
    return (
      <div style={{display: "flex", alignItems: "center", gap: "1em"}}>
        Eye Color :
        <input type="color" value={color} onChange={handleChange}/>
      </div>
    )
  }
  
  function SkinColor() {
    
    let [color, setColor] = useState("#e9bf8f");
  
    const handleChange = (e) => {
      setColor(e.target.value);
    }
  
    document.querySelector("#face").style.fill = color;
    document.querySelector("#chest").style.fill = color;
    document.querySelector("#neck").style.fill = color;
    document.querySelector("#neck").style.filter = "brightness(85%)";
  
    return (
      <div style={{display: "flex", alignItems: "center", gap: "1em"}}>
        Skin Color :
        <input type="color" value={color} onChange={handleChange}/>
      </div>
    )
  }
  
  function ShirtColor() {
    let [color, setColor] = useState("#1ba47c");
  
    const handleChange = (e) => {
      setColor(e.target.value);
    }
  
    document.querySelector("#shirt").style.fill = color;
  
    return (
      <div style={{display: "flex", alignItems: "center", gap: "1em"}}>
        Shirt Color :
        <input type="color" value={color} onChange={handleChange}/>
      </div>
    )
  }

  export default AvatarCreator;