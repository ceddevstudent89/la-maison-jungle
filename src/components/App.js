import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import QuestionFom from "./QuestionFom";
import ShoppingList from "./ShoppingList";
import "../styles/Layout.css";

function handleSubmit(e) {
  e.preventDefault();
  alert(e.target["my-input"].value);
}

export default function App() {
  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart />
        <ShoppingList />
      </div>
      <QuestionFom />
      <Footer />
    </div>
  );
}
