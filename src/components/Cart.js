import { useState } from "react";
import "../styles/Cart.css";

// Je récupère les props cart set setCart
export default function Cart({ cart, setCart }) {
  // const monsteraPrice = 8;
  // const ivyPrice = 10;
  // const flowerPrice = 15;

  // Je fais remonter cart au parent App.js
  // const [cart, setCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <h2>Panier</h2>
      {/* <div>Monstera : {monsteraPrice}€</div> */}
      {/* Je profite pour supprimer mon bouton "Ajouter */}
      {/* <button onClick={() => setCart(cart + 1)}>Ajouter</button> */}
      {cart.map(({ name, price, amount }, index) => (
        <div key={`${name}-${index}`}>
          {name} {price}€ * {amount}
        </div>
      ))}
      <h3>Total : {total}€</h3>
      <button onClick={() => setCart([])}>Vider le panier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le panier
      </button>
    </div>
  );
}
