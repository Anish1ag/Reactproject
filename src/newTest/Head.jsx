import "../App.css";
function Card({ children }) {
  return <div className="child">{children}</div>;
}

function Head() {
  return <div>Head</div>;
}

export { Head, Card };
