import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import QuestionFom from "./QuestionFom";
import ShoppingList from "./ShoppingList";
import "../styles/Layout.css";

import { useState } from "react";

function handleSubmit(e) {
  e.preventDefault();
  alert(e.target["my-input"].value);
}

export default function App() {
  // j'ai remonte cart dans le parent
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        {/*  je passe cart ainsi que setCart en props : */}
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} />
      </div>
      <QuestionFom />
      <Footer />
    </div>
  );
}
