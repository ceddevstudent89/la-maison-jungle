import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import CareScale from "./CareScale";

export default function ShoppingList() {
  // Création d'un tableau avec les différentes catégories
  const categories = [];
  plantList.forEach((plant) => {
    if (!categories.includes(plant.category)) {
      categories.push(plant.category);
    }
  });

  console.log(categories);

  return (
    <>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <li key={`${plant.id}`} className="lmj-plant-item">
            {plant.name}
            {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
            {plant.isBestSale && <span>🔥</span>}
            {(plant.isBestSale || plant.category === "classique") && (
              <span>🌿</span>
            )}
            {plant.category === "extérieur" && <span>🏡</span>}
            <CareScale scaleValue={plant.light} />
          </li>
        ))}
      </ul>
    </>
  );
}
