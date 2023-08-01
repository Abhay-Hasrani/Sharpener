import Product from "./Product";
import './Section.css'
const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Section = (props) => {
  const productList = productsArr.map((item) => {
    return (
      <Product key={item.imageUrl} title={item.title} price={item.price} imageUrl={item.imageUrl} />
    );
  });
  return (
    <div className="section">
      <div className="title">{props.title}</div>
      <div className="productList">{productList}</div>
    </div>
  );
};
export default Section;
