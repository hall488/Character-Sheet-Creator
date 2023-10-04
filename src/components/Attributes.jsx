import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faMinus, faPlus);


function Attributes({points, setPoints}) {
  
    const totalPoints = 25;
    const usedPoints = Object.values(points).reduce( (a,b) => a + b, 0);
  
    const handleAdd = (e) => {
    
      let key = e.currentTarget.getAttribute("type");
      if(usedPoints < totalPoints && points[key] < 10) {
        setPoints({...points, [key]: points[key]+1});
      }
  
    }
  
    const handleSub = (e) => {
      let key = e.currentTarget.getAttribute("type");
      if(points[key] > 0) {
        setPoints({...points, [key]: points[key]-1});
      }
    }
  
    return(
      <div style={{display: "flex", alignItems: "flex-end", flexDirection: "column"}}>
        <div>Points Left: {totalPoints - usedPoints}</div>
        <AttType type="Strength" value={points.Strength} onAdd={handleAdd} onSub={handleSub}/>
        <AttType type="Dexterity" value={points.Dexterity} onAdd={handleAdd} onSub={handleSub}/>     
        <AttType type="Charisma" value={points.Charisma} onAdd={handleAdd} onSub={handleSub}/>     
        <AttType type="Intelligence" value={points.Intelligence} onAdd={handleAdd} onSub={handleSub}/>     
        <AttType type="Luck" value={points.Luck} onAdd={handleAdd} onSub={handleSub}/>     
      </div>
    )
  }
  
  function AttType({type, value, onAdd, onSub}) {
  
      return (
        <div style={{ userSelect: "none", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1em"}}>
          {type} :
          <FontAwesomeIcon type={type} value={value} icon="minus" onClick={onSub}/>
          <div>{value}</div>
          <FontAwesomeIcon type={type} value={value} icon="plus" onClick={onAdd}/>
        </div>
      )
  }

  export default Attributes;