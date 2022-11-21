import React from "react";
import { Button, Card } from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "@reach/router";

const ProductCard = (props) => {
  let { image, price, title, id } = props.data;
  const [theme] = useThemeHook();
  const { addItem } = useCart();

  const addToCart = () => {
    addItem(props.data);
  };

  return (
    <Card
      style={{ width: "18rem", height: "auto" }}
      className={`${
        theme ? "bg-light-black text-light" : "bg-light text-black"
      } text-center p-0 overflow-hidden shadow mx-auto mb-4`}
    >
      <Link to={`/product-details/${id}`}>
        <div
          style={{
            height: "15rem",
            display: "flex",
            overflow: "hidden",
            background: "white",
            alignItems: "center",
            marginBottom: "inherit",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "9rem" }}>
            <Card.Img variant="top" src={image} className="img-fluid" />
          </div>
        </div>
      </Link>
      <Card.Body>
        <Card.Title
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Card.Title>
        <Card.Title>
          Rs. <span className="h3">{price}</span>
        </Card.Title>

        <Button
          onClick={() => addToCart()}
          className={`${
            theme ? "bg-dark-primary text-black" : "bg-light-primary text-light"
          } d-flex align-item-center m-auto border-0`}
        >
          <BsCartPlus size="1.8rem" />
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
