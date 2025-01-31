import {useDispatch, useSelector} from "react-redux"
import { addToCard, updateQuantity } from "../../actions/cart";
function ProductItem(props){
  const {item} = props;
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducers);
  const handleAddToCart = () => {
    if(cart.some(itemCart => itemCart.id === item.id)){
      dispatch(updateQuantity(item.id))
    }
    else{
      dispatch(addToCard(item.id,item));
    }
  }
  return(
    <>
      <div className="product__item">
            <div className="product__image">
              <img src={item.thumbnail} alt={item.title}></img>
            </div>
            <div className="product__content">
              <div className="product__content--title">{item.title}</div>
              <div className="product__content--newPrice">{(item.price - (item.discountPercentage*item.price)/100).toFixed(2)}$</div>
              <div className="product__content--oldPrice">{item.price}$</div>
              <div className="product__content--discount">-{item.discountPercentage}%</div>
            </div>
            <button onClick={handleAddToCart} className="product__add">Add to cart</button>
          </div>
    </>
  )
}
export default ProductItem;