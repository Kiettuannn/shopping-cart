import {combineReducers} from "redux"
import cartReducers from "./cart"

const allReducers = combineReducers({
  cartReducers,
})
export default allReducers;