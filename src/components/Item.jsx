import Icon from '@mdi/react';
import { mdiBottleTonicPlus, mdiEgg} from '@mdi/js';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

library.add(faCoins);

function Item({item, setItem}) {

    
  
    const handleItem = (e) => {
      setItem(e.target.value);
    }
  
    let currentItem = mapItem(item);
  
    return(
      <div className="item">
        Item :
        <select onChange={handleItem}>
          <option value="Health Potion">Health Potion</option>
          <option value="4 Gold">4 Gold</option>
          <option value="Egg">Egg</option>
        </select>
        <div className="pic">{currentItem}</div>
      </div>
    )
}

function mapItem(item) {
    let currentItem;
    switch(item) {
        case "Health Potion":
            currentItem = <Icon path={mdiBottleTonicPlus}
            size={1}
            />
            break;
        case "4 Gold":
            currentItem = <FontAwesomeIcon icon="coins"/>
            break;
        case "Egg":
            currentItem = <Icon path={mdiEgg}
            size={1}
            />
            break;
        }

        return currentItem;
}

  export {Item, mapItem};