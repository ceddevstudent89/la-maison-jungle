import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import QuestionFom from "./QuestionFom";
import ShoppingList from "./ShoppingList";

function handleSubmit(e) {
  e.preventDefault();
  alert(e.target["my-input"].value);
}

export default function App() {
  return (
    <div>
      <Banner />
      <Cart />
      <ShoppingList />
      <QuestionFom />
      <Footer />
    </div>
  );
}
