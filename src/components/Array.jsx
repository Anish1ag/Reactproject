/* eslint-disable react/jsx-key */
import "./array.css";

function Array() {
  const top = ["SN", "Name", "Model"];
  const cars = [
    { name: "bmw", model: "i7 M70" },
    { name: "toyota", model: "defender" },
    { name: "bugatti", model: "chiron" },
  ];
  return (
    <div className="arry">
      {
        <table>
          <thead>
            {top.map((car) => (
              <th>{car}</th>
            ))}
          </thead>

          {cars.map((car, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{car.name}</td>
              <td>{car.model}</td>
            </tr>
          ))}
        </table>
      }
    </div>
  );
}

export default Array;
