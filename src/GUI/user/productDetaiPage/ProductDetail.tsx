import { useParams } from "react-router-dom";
import { ExtraDiscription, Product } from "./ProductDetailComponents";
import { useEffect, useState } from "react";
import { productData } from "../../../BLL/type";
import { getProductById } from "../../../DAL/productDataAccess";

export default function ProductDetail() {
  const { id } = useParams();

  const initialState = {
    id: 0,
    name: "",
    category: "",
    price: 0,
    image: "",
    description: "",
  };

  const [product, setProduct] = useState<productData>(initialState);

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <>
      <section className="sec-product-detail bg0 p-t-65 p-b-60">
        <div className="container">
          <Product product={product} />

          <ExtraDiscription />
        </div>
      </section>
    </>
  );
}
