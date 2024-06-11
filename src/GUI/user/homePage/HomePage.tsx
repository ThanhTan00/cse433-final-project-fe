import React, { FormEvent, useEffect, useState } from "react";
import { Banner, OverviewProduct, Slider2 } from "./HomePageComponents";
import { productData } from "../../../BLL/type";
import { getAllProducts } from "../../../DAL/productDataAccess";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";

export default function () {
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
      <Slider2 />

      <Banner />

      <section className="bg0 p-t-23 p-b-140">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">Product Overview</h3>
          </div>

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

          <OverviewProduct products={filteredProducts} />

          <div className="flex-c-m flex-w w-full p-t-45">
            <NavLink
              to={"/shop"}
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
