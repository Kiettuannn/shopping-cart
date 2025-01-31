import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { deleteAll } from "../../actions/cart";
import "./Cart.scss"
function Cart() {
  const cart = useSelector(state => state.cartReducers);
  const totalPrice = cart.reduce((sum, item) =>{
    const newPrice = (item.info.price - (item.info.discountPercentage * item.info.price) / 100).toFixed(2)
    return sum + item.quantity*newPrice;
  },0)

  const dispatch = useDispatch();

  const handleDelete = () =>{
    dispatch(deleteAll());
  }
  return (
    <>
      <header className="cart__header">
        <div className="cart__header--title">Cart</div>
        <button onClick={handleDelete} className="cart__header--delete">Delete all</button>
      </header>
      <main className="cart__main">
        {cart.length > 0 ? (
          <>
            <CartList />
            <div className="cart__main--total">
              Total price: <span>{totalPrice}$</span>
            </div>
          </>
        ) : (
          <div className="cart__main--desc">Empty cart</div>
        )}
      </main>
    
    </>
  )
}
export default Cart;

