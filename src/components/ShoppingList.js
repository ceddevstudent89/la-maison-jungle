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

  function addToCart(name, price) {
    const currentplantAdded = cart.find((plant) => plant.name === name);

    if (currentplantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.mame !== name
      );
      setCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentplantAdded.amount + 1 },
      ]);
    } else {
      setCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">
      <ul>
        {categories.map((cat) => (
          <li key={cat}>🪴{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price }) => (
          <div key={id}>
            <PlantItem cover={cover} name={name} water={water} light={light} />
            {/* je lui passe setCart. */}
            <button onClick={() => addToCart(name, price)}>Ajouter</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
