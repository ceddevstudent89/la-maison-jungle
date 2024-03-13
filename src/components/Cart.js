export default function Cart() {
  const monsteraPrice = 8;
  const ivyPrice = 10;
  const flowerPrice = 15;
  return (
    <div>
      <h2>Panier</h2>
      <ul>
        <li>{`Monstera : ${monsteraPrice} €`}</li>
        <li>{`Lierre : ${ivyPrice} €`}</li>
        <li>{`Bouquet de fleurs : ${flowerPrice} €`}</li>
      </ul>
      Total : {monsteraPrice + ivyPrice + flowerPrice} €
    </div>
  );
}