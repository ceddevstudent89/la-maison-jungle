import "../styles/Banner.css";

export default function Recommendation() {
  const currentMonth = new Date().getMonth();
  console.log("Mois ", currentMonth);
  const isSpring = currentMonth >= 2 && currentMonth <= 5;
  console.log(isSpring);

  if (!isSpring) {
    return (
      <div className="lmj-banner-recommendation">
        Ce n'est pas le moment de rempoter 🌿
      </div>
    );
  }
  // Sinon
  return (
    <div className="lmj-banner-recommendation">
      C'est le printemps, rempotez 🌱
    </div>
  );
}
