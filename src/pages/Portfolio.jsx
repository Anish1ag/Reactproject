/* eslint-disable react/prop-types */
import "./portfolio.css";
import Card from "../components/card/Card";
import Button from "../components/card/Button";
function Portfolio() {
  const abc = [
    {
      item: "item1",
      image: "https://picsum.photos/200/300",
      price: "Price:$100",
      desc: "The decsription of the card1. ",
    },
    {
      item: "item2",
      image: "https://picsum.photos/200/300",
      price: "Price:$200",
      desc: "The decsription of the card2",
    },
    {
      item: "item3",
      image: "https://picsum.photos/200/300",
      price: "Price:$150",
      desc: "The decsription of the card3. ",
    },
  ];
  return (
    <>
      <div className="port">
        {abc.map((abc, index) => (
          <Card key={index} item={abc.item} image={abc.image} price={abc.price}>
            {abc.desc}
          </Card>
        ))}
      </div>
      <Button>button</Button>
    </>
  );
}

export default Portfolio;
