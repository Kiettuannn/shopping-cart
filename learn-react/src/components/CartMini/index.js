import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

function CartMini(){
  const cart = useSelector(state => state.cartReducers);
  const cartTotal = cart.reduce((sum, item) =>{
    return sum + item.quantity;
  },0)
  return(
    <>
      <Link to="/cart">Cart ({cartTotal})</Link>
    </>
  )
}
export default CartMini;