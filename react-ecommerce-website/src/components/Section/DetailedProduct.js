import { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../store/cart-context";
import { Image } from "react-bootstrap";
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
const DetailedProduct = () => {
    const {productId} = useParams();
    //we can use the id to get product from database or context but we have static data now
  
    const index = productsArr.findIndex((item)=>productId==item.title);
    const props=productsArr[index];
  return (
    <>
    <h1>Deatiled product item page</h1>
      <Image src={props.imageUrl} rounded />
      <div>{props.title}</div>
      <div>₹{props.price}</div>
    </>
  );
};
export default DetailedProduct;
