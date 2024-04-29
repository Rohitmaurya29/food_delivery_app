import { useEffect, useState } from "react";

const Header = (props) => {
  const [newcart, setnewcart] = useState([]);
  useEffect(() => {
    const propsvalue = props.cart;
    setnewcart(propsvalue);
  }, [props.cart]);

  const handleQuantityChange = (event, index) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      const updatedCart = [...newcart];
      updatedCart[index].quantity = newQuantity;
      setnewcart(updatedCart);
    }
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...newcart];
    updatedCart[index].quantity += 1;
    setnewcart(updatedCart);
  };
  const decreaseQuantity = (index) => {
    const updatedCart = [...newcart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setnewcart(updatedCart);
    }
  };

  
  const calculateTotalAmount = () => {
    let total = 0;
    for (const item of newcart) {
      total += item.price * item.quantity;
    }
    return total;
  };
  const removecart = (id) => {
    const leftPros = newcart.filter((item) => item.id !== id);
    props.remove(leftPros)
  };

  return (
    <>
      
      <div className="cartflexer">
        {newcart.map((addpro, index) => {
          return (
            <>
              <div className="show_products cartproductslist">
                <div className="thumbnail">
                  <img src={addpro.thumbnail} alt={addpro.title} />
                </div>
                <div className="product-content">
                  <div className="product_title">{addpro.title}</div>
                  <div className="price">
                    <div className="nor_price">
                      <span>Price: </span>${addpro.price}
                    </div>
                    <div className="dis_percent">
                      <span>Discount: </span>
                      {addpro.discountPercentage}%
                    </div>
                  </div>
                  <div className="stock_rating">
                    <div className="stocks">
                      <span>Stocks: </span>
                      {addpro.stock}
                    </div>
                    <div className="rating">
                      <span>Rating: </span>
                      {addpro.rating} <b>Stars</b>
                    </div>
                  </div>
                  <div className="cat_brand">
                    <div className="brand">
                      <span>Brand: </span>
                      {addpro.brand}
                    </div>
                    <div className="category">
                      <span>Category: </span>
                      {addpro.category}
                    </div>
                  </div>
                  <div className="product_dis">
                    <span>Description: </span>
                    {addpro.description}
                  </div>
                  <div className="all-btns">
                  <button
                    className="decrease"
                    onClick={() => decreaseQuantity(index)}
                  >
                    -
                  </button>
                  <input
                    className="input"
                    type="number"
                    value={addpro.quantity}
                    onChange={(event) => handleQuantityChange(event, index)}
                  />

                  <button
                    className="increase"
                    onClick={() => increaseQuantity(index)}
                  >
                    +
                  </button>
                  <button
                    className="remove"
                    onClick={() => removecart(addpro.id)}
                  >
                    Remove from Cart
                  </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        {calculateTotalAmount() > 0 ? (
          <p className="totalprice"><span>Total Cart Amount: </span>${calculateTotalAmount()}</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Header;