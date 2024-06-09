import React from "react";

function Slider2() {
  return (
    <section className="section-slide">
      <div className="wrap-slick1">
        <div className="slick1">
          <div
            className="item-slick1"
            style={{ backgroundImage: "url(images/slide-01.jpg)" }}
          >
            <div className="container h-full">
              <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="fadeInDown"
                  data-delay="0"
                >
                  <span className="ltext-101 cl0 respon2">
                    Welcome to our website
                  </span>
                </div>

                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="fadeInUp"
                  data-delay="800"
                >
                  <h2 className="ltext-201 cl0 p-t-19 p-b-43 respon1">
                    TAN'STORE
                  </h2>
                </div>
                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="fadeInDown"
                  data-delay="0"
                >
                  <span className="ltext-101 cl0 respon2">
                    the heaven of shoes lovers
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="item-slick1"
            style={{ backgroundImage: "url(images/slide-02.jpg)" }}
          >
            <div className="container h-full">
              <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="rollIn"
                  data-delay="0"
                >
                  <span className="ltext-101 cl0 respon2">New Arrivals</span>
                </div>

                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="lightSpeedIn"
                  data-delay="800"
                >
                  <h2 className="ltext-201 cl0 p-t-19 p-b-43 respon1">
                    Sneakers and Sandals
                  </h2>
                </div>

                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="slideInUp"
                  data-delay="1600"
                >
                  <a
                    href="navigate?target=shop"
                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="item-slick1"
            style={{ backgroundImage: "url(images/slide-03.jpg)" }}
          >
            <div className="container h-full">
              <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="rollIn"
                  data-delay="0"
                >
                  <span className="ltext-101 cl0 respon2">Read our latest</span>
                </div>

                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="lightSpeedIn"
                  data-delay="800"
                >
                  <h2 className="ltext-201 cl0 p-t-19 p-b-43 respon1">
                    blog posts
                  </h2>
                </div>

                <div
                  className="layer-slick1 animated visible-false"
                  data-appear="slideInUp"
                  data-delay="1600"
                >
                  <a
                    href="navigate?target=blog"
                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                  >
                    visit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Banner() {
  return (
    <div className="sec-banner bg0 p-t-80 p-b-50">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">
              <img src="images/banner-01.jpg" alt="IMG-BANNER" />

              <a
                href="product.html"
                className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
              >
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    Women
                  </span>

                  <span className="block1-info stext-102 trans-04">
                    Spring 2018
                  </span>
                </div>

                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    Shop Now
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">
              <img src="images/banner-02.jpg" alt="IMG-BANNER" />

              <a
                href="product.html"
                className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
              >
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    Men
                  </span>

                  <span className="block1-info stext-102 trans-04">
                    Spring 2018
                  </span>
                </div>

                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    Shop Now
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">
              <img src="images/banner-03.jpg" alt="IMG-BANNER" />

              <a
                href="product.html"
                className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
              >
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    Accessories
                  </span>

                  <span className="block1-info stext-102 trans-04">
                    New Trend
                  </span>
                </div>

                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    Shop Now
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Slider2, Banner };
