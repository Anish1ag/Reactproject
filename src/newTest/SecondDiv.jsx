import "./SecondDiv.css";

function ThirdDiv() {
  return <div>ThirdDiv</div>;
}

export default SecondDiv;
function SecondDiv() {
  const obj = { name: "milan", age: 20 };
  const { name, age } = obj;
  console.log(name);
  return <div className="seconddiv">SecondDiv</div>;
}

export { SecondDiv, ThirdDiv };
