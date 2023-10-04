import { useState } from 'react'
import './App.css'
import AvatarCreator from './components/AvatarCreator';
import Attributes from './components/Attributes';
import {Character, mapIcons} from './components/Character';
import {Item, mapItem} from './components/Item';
import Icon from '@mdi/react';

import { useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";

library.add(faHeartPulse);



function App() {

  let [characterClass, setClass] = useState("Warrior");
  let [characterName, setName] = useState("");
  let [points, setPoints] = useState({Strength: 0, Dexterity: 0, Charisma: 0, Intelligence: 0, Luck: 0});
  let [item, setItem] = useState("Health Potion");
  let [sheetToggle, setToggle] = useState(false);
  

  useEffect( () => {
    if(!sheetToggle) {
      const avatar = document.querySelector("#avatar");

      const topRow = document.querySelector('.top-row');
    
      topRow.insertBefore(avatar, topRow.children[1]);
    }
  });

  const handleToggle = () => {
    console.log(sheetToggle);

    const avatar = document.querySelector("#avatar");
    const app = document.querySelector(".App");
    let sheetWrapper = document.querySelector(".sheet-wrapper");

    if(sheetToggle) {
      document.querySelector(".create").disabled = "";
      document.querySelector(".edit").disabled = "disabled";

      app.style.opacity = "100%";
      sheetWrapper.style.opacity = "0%";
    } else {
      document.querySelector(".create").disabled = "disabled";     
      app.style.opacity = "0%";

      setTimeout(() => {  
        sheetWrapper.style.opacity = "100%";
        document.querySelector(".edit").disabled = "";
        sheetWrapper.querySelector(".s-avatar").append(avatar);
      }, 1000);
      
    }
    
    setToggle(!sheetToggle);
  }

  let icons = mapIcons(characterClass);

  return (
    <>
    <div className="App">
        <div className="title">Character Sheet Creator</div>
        <div className="top-row">
          <Character characterClass={characterClass} setClass={setClass} characterName={characterName} setName={setName}/>
          <AvatarCreator/>
        </div>
        <div className="bot-row">
          <Attributes points={points} setPoints={setPoints}/>
          <Item item={item} setItem={setItem}/>
        </div>
        <button className="create" onClick={handleToggle}>Create Sheet</button>
    </div>
    <div className="sheet-wrapper" style={{display: sheetToggle ? "flex" : "none"}}>
      <div className="sheet">
          <div className="s-avatar">
      
          </div>
          <div className="s-character">
            <div className="s-name">
              {characterName}
            </div>
            <div className="s-class">
              Class : {characterClass}
            </div>
            <div className="s-abilities">
            Abilities :
            <div className="icons" >
              <Icon path={icons[0]}
                size={1}
              />
              <Icon path={icons[1]}
                size={1}
              />
              <Icon path={icons[2]}
                size={1}
              />
            </div>
            </div>
          </div>
          <div className="s-attributes">
          <div className="health">
              <FontAwesomeIcon icon="heart-pulse"/>
              <FontAwesomeIcon icon="heart-pulse"/>
              <FontAwesomeIcon icon="heart-pulse"/>
              <FontAwesomeIcon icon="heart-pulse"/>
            </div>
            Strength: {points.Strength} <br/>
            Dexterity: {points.Dexterity} <br/>
            Charisma: {points.Charisma} <br/>
            Intelligence: {points.Intelligence} <br/>
            Luck: {points.Luck}
          </div>
          <div className="s-inventory">
            Inventory :
            <div title={item} className="s-item">{mapItem(item)}</div>
          </div>
      </div>
      <div className="buttons">
        <button className="edit" onClick={handleToggle}>Edit</button>
      </div>
    </div>
    </>
    
  )
}





export default App
