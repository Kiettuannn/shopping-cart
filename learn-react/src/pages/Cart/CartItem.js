import { useDispatch } from "react-redux";
import { updateQuantity, deleteCartItem } from "../../actions/cart";
import { useRef } from "react";
function CartItem(props) {
  const { item } = props;
  const dispatch = useDispatch();

  const inputRef = useRef()

  const handleUp = () => {
    dispatch(updateQuantity(item.id))
    inputRef.current.value = parseInt(inputRef.current.value) + 1;
  }

  const handelDown = () => {
    if(item.quantity > 1){
      dispatch(updateQuantity(item.id,-1))
      inputRef.current.value = parseInt(inputRef.current.value) - 1;
    }
  }
  const handleDelete = () => {
    dispatch(deleteCartItem(item.id));
  }
  return (
    <>
      <div className="cart__item" >
        <div className="cart__item__info">
          <div className="cart__item__info--image">
            <img src={item.info.thumbnail} alt={item.info.title}></img>
          </div>
          <div className="cart__item__info__content">
            <div className="cart__item__info__content--title">{item.info.title}</div>
            <div className="cart__item__info__content--newPrice">{(item.info.price - (item.info.discountPercentage * item.info.price) / 100).toFixed(2)}$</div>
            <div className="cart__item__info__content--oldPrice">{item.info.price}$</div>
          </div>
        </div>
        <div className="cart__item__quantity">
          <button onClick={handelDown} className="cart__item__quantity--sub">-</button>
          <input ref={inputRef} className="cart__item__quantity--value" defaultValue={item.quantity}></input>
          <button onClick={handleUp} className="cart__item__quantity--add">+</button>
          <button onClick={handleDelete} className="cart__item__quantity--delete">Delete</button>
        </div>
      </div>
    </>
  )
}
export default CartItem;