import React, { FormEvent, useEffect, useState } from "react";
import { ProductList } from "./PruductComponents";
import { getAllProducts } from "../../../DAL/productDataAccess";
import { productData } from "../../../BLL/type";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ProductPage() {
  const [products, setProducts] = useState<productData[]>([]);
  
  const [filteredProducts, setFilteredProducts] = useState<productData[]>([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();

  const filterProducts = (catProduct: string) => {
    const updatePrducts = products.filter((curProduct) => {
      return curProduct.category.toLowerCase() === catProduct.toLowerCase();
    });
    setFilteredProducts(updatePrducts);
  };

  const navigate = useNavigate();

  function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    setSearchParams({ search });
    navigate(`/shop/?search=${search}`);
  }

  function getSearchProducts() {
    const search = searchParams.get("search");
    if (search === null || search === "") {
      return filteredProducts;
    } else {
      return filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().indexOf(search.toLowerCase()) > -1
      );
    }
  }
  return (
    <>
      <div style={{ height: "80px" }}></div>
      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 "
                onClick={() => setFilteredProducts(products)}
              >
                All Products
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                onClick={() => filterProducts("women")}
              >
                Women
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                onClick={() => filterProducts("men")}
              >
                Men
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                onClick={() => filterProducts("bag")}
              >
                Bag
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                onClick={() => filterProducts("shoes")}
              >
                Shoes
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                onClick={() => filterProducts("watch")}
              >
                Watches
              </button>
            </div>
            <div className="flex-w flex-c-m m-tb-10">
              <form
                onSubmit={handleSearchSubmit}
                className="panel-search w-full p-t-10 p-b-15"
              >
                <div className="bor8 dis-flex p-l-15">
                  <button
                    type="submit"
                    className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04"
                  >
                    <i className="zmdi zmdi-search"></i>
                  </button>

                  <input
                    className="mtext-107 cl2 size-114 plh2 p-r-15"
                    type="text"
                    name="search"
                    placeholder="Search"
                    defaultValue={searchParams.get("search") ?? ""}
                  />
                </div>
              </form>
            </div>
          </div>

          <ProductList products={getSearchProducts()} />

          <div className="flex-c-m flex-w w-full p-t-45">
            <a
              href="#"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
