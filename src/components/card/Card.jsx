/* eslint-disable react/prop-types */
import "./card.css";
function Card(props) {
  const { children, item, image, price } = props;
  return (
    <div className="cardd">
      {item && <div className="item">{item}</div>}
      {image && (
        <div className="ima">
          <img src={image} />
        </div>
      )}
      {price && <div className="price">{price}</div>}
      {children && <div className="children">{children}</div>}
    </div>
  );
}

export default Card;
