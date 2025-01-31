import CartItem from "./CartItem";
import "./CartList.scss"
import { useSelector } from "react-redux";

function CartList() {
  const cart = useSelector(state => state.cartReducers);
  return (
    <>
      <div className="cart">
        {cart.map(item => (
          <CartItem key={item.id} item={item}/>
        ))}
      </div>
    </>
  )
}
export default CartList;