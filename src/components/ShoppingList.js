import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import CareScale from "./CareScale";
import PlantItem from "./PlantItem";

export default function ShoppingList({ cart, setCart }) {
  // Petite précision : categories nous vient de la partie précédente pour récupérer toutes les catégories uniques de plantes.
  // Création d'un tableau avec les différentes catégories
  const categories = [];
  plantList.forEach((plant) => {
    if (!categories.includes(plant.category)) {
      categories.push(plant.category);
    }
  });

  console.log(categories);

  return (
    <div className="lmj-shopping-list">
      <ul>
        {categories.map((cat) => (
          <li key={cat}>🪴{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <div key={id}>
            <PlantItem cover={cover} name={name} water={water} light={light} />
            {/* je lui passe setCart. */}
            <button onClick={() => setCart(cart + 1)}>Ajouter</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
