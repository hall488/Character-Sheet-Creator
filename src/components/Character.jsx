import Icon from '@mdi/react';
import { mdiSword, mdiShield, mdiWeatherTornado, mdiMagicStaff, mdiFire, mdiSnowflake, mdiSkull, mdiSpider, mdiHandshake } from '@mdi/js';

function Character({characterClass, setClass, characterName, setName}) {

    const handleClass = (e) => {
        setClass(e.target.value);
      }
    
      const handleName = (e) => {
        setName(e.target.value);
      }
  
    let ability_1, ability_2, ability_3;
  
    [ability_1, ability_2, ability_3] = mapIcons(characterClass);
  
    return(
      <div className="character" style={{display: "flex", flexDirection: "column", gap: "16px"}}>
          <div className="name">
            <label>Name : </label>
            <input spellCheck="false" value={characterName} onChange={handleName}/>
          </div>
          <div className="classes">
            <label>Class : </label>
            <select onChange={handleClass}>
              <option value="Warrior">Warrior</option>
              <option value="Sorcerer">Sorcerer</option>
              <option value="Necromancer">Necromancer</option>
            </select>
          </div>
          <div className="abilities" style={{display: "flex", alignItems: "center", gap: "8px"}}>
            Abilities :
          <div className="icons" >
            <Icon path={ability_1}
              size={1}
            />
            <Icon path={ability_2}
              size={1}
            />
            <Icon path={ability_3}
              size={1}
            />
          </div>
          </div>
          
      </div>
    )
  }

  function mapIcons(characterClass) {

    let icons = [];
    let ability_1, ability_2, ability_3;

    switch(characterClass) {
        case "Warrior":
          ability_1 = mdiSword;
          ability_2 = mdiShield;
          ability_3 = mdiWeatherTornado;
          break;
        case "Sorcerer":
          ability_1 = mdiMagicStaff;
          ability_2 = mdiFire;
          ability_3 = mdiSnowflake;
          break;
        case "Necromancer":
          ability_1 = mdiSkull;
          ability_2 = mdiSpider;
          ability_3 = mdiHandshake;
          break;
      }

    icons.push(ability_1, ability_2, ability_3);

    return icons;
  }

  export {Character, mapIcons};