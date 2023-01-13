import React from 'react'
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = (p) => (
    <div className="cartItem">
      <div>
        <h4>{p.title}</h4>
        <img src={p.img} alt="Item" />
      </div>
  
      <div>
        <button onClick={p.decrement}>-</button>
        <input type="number" readOnly value={p.value} />
        <button onClick={p.increment}>+</button>
      </div>
    </div>
  );
const Cart = () => {
    const increment = (item) => {};

    const decrement = (item) => {};

  return (
<>
<section className="cart mt-5">
      <main>


      <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />


<article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges </h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>

      </main>
    </section>
</>
  )
}

export default Cart