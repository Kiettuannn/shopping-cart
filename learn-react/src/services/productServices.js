import {get, del} from "../utils/request";

export const getProductList = async () => {
  const result = await get("products");
  return result;
}

export const deleteProduct = async (id) =>{
  const result = await del(`products/${id}`);
  return result;
}