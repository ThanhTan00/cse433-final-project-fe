import React from "react";
import { Banner, Slider, Slider2 } from "./HomePageComponents";

export default function () {
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
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
                data-filter="*"
              >
                All Products
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".women"
              >
                Women
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".men"
              >
                Men
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".bag"
              >
                Bag
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".shoes"
              >
                Shoes
              </button>

              <button
                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                data-filter=".watches"
              >
                Watches
              </button>
            </div>

            <div className="flex-w flex-c-m m-tb-10">
              <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Search
              </div>
            </div>

            <div className="dis-none panel-search w-full p-t-10 p-b-15">
              <div className="bor8 dis-flex p-l-15">
                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <i className="zmdi zmdi-search"></i>
                </button>

                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          <div className="row isotope-grid">
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-01.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Esprit Ruffle Shirt
                    </a>

                    <span className="stext-105 cl3">$16.64</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-02.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Herschel supply
                    </a>

                    <span className="stext-105 cl3">$35.31</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-03.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Only Check Trouser
                    </a>

                    <span className="stext-105 cl3">$25.50</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-04.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Classic Trench Coat
                    </a>

                    <span className="stext-105 cl3">$75.00</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-05.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Front Pocket Jumper
                    </a>

                    <span className="stext-105 cl3">$34.75</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-06.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Vintage Inspired Classic
                    </a>

                    <span className="stext-105 cl3">$93.20</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-07.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Shirt in Stretch Cotton
                    </a>

                    <span className="stext-105 cl3">$52.66</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-08.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Pieces Metallic Printed
                    </a>

                    <span className="stext-105 cl3">$18.96</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item shoes">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-09.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Converse All Star Hi Plimsolls
                    </a>

                    <span className="stext-105 cl3">$75.00</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-10.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Femme T-Shirt In Stripe
                    </a>

                    <span className="stext-105 cl3">$25.85</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-11.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Herschel supply
                    </a>

                    <span className="stext-105 cl3">$63.16</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-12.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Herschel supply
                    </a>

                    <span className="stext-105 cl3">$63.15</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-13.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      T-Shirt with Sleeve
                    </a>

                    <span className="stext-105 cl3">$18.49</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-14.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Pretty Little Thing
                    </a>

                    <span className="stext-105 cl3">$54.79</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-15.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Mini Silver Mesh Watch
                    </a>

                    <span className="stext-105 cl3">$86.85</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img src="images/product-16.jpg" alt="IMG-PRODUCT" />

                  <a
                    href="#"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Square Neck Back
                    </a>

                    <span className="stext-105 cl3">$29.64</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="#"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src="images/icons/icon-heart-01.png"
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src="images/icons/icon-heart-02.png"
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-c-m flex-w w-full p-t-45">
            <a
              href="#"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </a>
          </div>
        </div>
      </section>

      <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
        <div className="overlay-modal1 js-hide-modal1"></div>

        <div className="container">
          <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal1">
              <img src="images/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">
              <div className="col-md-6 col-lg-7 p-b-30">
                <div className="p-l-25 p-r-30 p-lr-0-lg">
                  <div className="wrap-slick3 flex-sb flex-w">
                    <div className="wrap-slick3-dots"></div>
                    <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

                    <div className="slick3 gallery-lb">
                      <div
                        className="item-slick3"
                        data-thumb="images/product-detail-01.jpg"
                      >
                        <div className="wrap-pic-w pos-relative">
                          <img
                            src="images/product-detail-01.jpg"
                            alt="IMG-PRODUCT"
                          />

                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href="images/product-detail-01.jpg"
                          >
                            <i className="fa fa-expand"></i>
                          </a>
                        </div>
                      </div>

                      <div
                        className="item-slick3"
                        data-thumb="images/product-detail-02.jpg"
                      >
                        <div className="wrap-pic-w pos-relative">
                          <img
                            src="images/product-detail-02.jpg"
                            alt="IMG-PRODUCT"
                          />

                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href="images/product-detail-02.jpg"
                          >
                            <i className="fa fa-expand"></i>
                          </a>
                        </div>
                      </div>

                      <div
                        className="item-slick3"
                        data-thumb="images/product-detail-03.jpg"
                      >
                        <div className="wrap-pic-w pos-relative">
                          <img
                            src="images/product-detail-03.jpg"
                            alt="IMG-PRODUCT"
                          />

                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href="images/product-detail-03.jpg"
                          >
                            <i className="fa fa-expand"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-5 p-b-30">
                <div className="p-r-50 p-t-5 p-lr-0-lg">
                  <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                    Lightweight Jacket
                  </h4>

                  <span className="mtext-106 cl2">$58.79</span>

                  <p className="stext-102 cl3 p-t-23">
                    Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                    ligula. Mauris consequat ornare feugiat.
                  </p>

                  <div className="p-t-33">
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Size</div>

                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time">
                            <option>Choose an option</option>
                            <option>Size S</option>
                            <option>Size M</option>
                            <option>Size L</option>
                            <option>Size XL</option>
                          </select>
                          <div className="dropDownSelect2"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Color</div>

                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time">
                            <option>Choose an option</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>White</option>
                            <option>Grey</option>
                          </select>
                          <div className="dropDownSelect2"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-204 flex-w flex-m respon6-next">
                        <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                          <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-minus"></i>
                          </div>

                          <input
                            className="mtext-104 cl3 txt-center num-product"
                            type="number"
                            name="num-product"
                            value="1"
                          />

                          <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-plus"></i>
                          </div>
                        </div>

                        <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                    <div className="flex-m bor9 p-r-10 m-r-11">
                      <a
                        href="#"
                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                        data-tooltip="Add to Wishlist"
                      >
                        <i className="zmdi zmdi-favorite"></i>
                      </a>
                    </div>

                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Facebook"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>

                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>

                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Google Plus"
                    >
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
