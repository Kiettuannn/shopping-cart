import { useEffect, useState } from "react";
import { getProductList } from "../../services/productServices";
import "./ProductList.scss"
import ProductItem from "./ProductItem";
function ProductList() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList();
      setProductList(result);
    }
    fetchApi();
  }, [])

  return (
    <>
      <div className="product">
        {productList.map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}
export default ProductList;