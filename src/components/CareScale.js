import Sun from "../assets/sun.svg";

export default function CareScale(props) {
  console.log(props);

  const scaleValue = props.scaleValue;

  const range = [1, 2, 3];

  return (
    <div>
      {range.map((rangeElement) =>
        scaleValue >= rangeElement ? <img src={Sun} alt="Soleil" /> : null
      )}
    </div>
  );
}
