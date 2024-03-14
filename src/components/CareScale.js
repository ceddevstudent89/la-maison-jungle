import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

const quantityLabel = {
  1: "peu",
  2: "modérément",
  3: "beaucoup",
};

export default function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType = careType === "light" ? "☀️" : "💧";
  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityLabel[scaleValue]} ${
            careType === "light" ? "de lumière" : "d'arrosage"
          }`
        )
      }
    >
      {range.map((rangeElement) =>
        scaleValue >= rangeElement ? (
          <span key={rangeElement.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}
