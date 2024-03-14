import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function handleClick(plantName) {
  alert(`✨ Vous voulez achetez 1 ${plantName} ? Très bon choix ✨`);
}

export default function PlantItem({ name, cover, id, light, water }) {
  return (
    <div>
      <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
        <img src={cover} alt="plant" className="lmj-plant-item-cover" />
        {name}
        <div>
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
        </div>
      </li>
    </div>
  );
}
