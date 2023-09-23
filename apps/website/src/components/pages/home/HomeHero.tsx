import React from "react";

type Props = {};

export default function HomeHero({}: Props) {
  return (
    <section className="hero-home2 pb100-xs">
      <div className="container">
        <div className="row mb60 mb0-xl">
          <div className="col-xl-7">
            <div className="pr30 pr0-lg mb30-md position-relative">
              <h1 className="animate-up-1 mb25 text-white">
                Find the perfect freelance <br className="d-none d-xl-block" />
                services for your business
              </h1>
              <p className="text-white animate-up-2">
                Work with talented people at the most affordable price to get
                the most <br className="d-none d-lg-block" /> out of your time
                and cost
              </p>
              <div className="advance-search-tab bgc-white p10 bdrs4-sm bdrs60 banner-btn position-relative zi1 animate-up-3 mt30">
                <div className="row">
                  <div className="col-md-5 col-lg-6 col-xl-6">
                    <div className="advance-search-field mb10-sm">
                      <form className="form-search position-relative">
                        <div className="box-search">
                          <span className="icon far fa-magnifying-glass"></span>
                          <input
                            className="form-control"
                            type="text"
                            name="search"
                            placeholder="What are you looking for?"
                          />
                          <div className="search-suggestions">
                            <h6 className="fz14 ml30 mt25 mb-3">
                              Popular Search
                            </h6>
                            <div className="box-suggestions">
                              <ul className="px-0 m-0 pb-4">
                                <li>
                                  <div className="info-product">
                                    <div className="item_title">
                                      mobile app development
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="info-product">
                                    <div className="item_title">
                                      mobile app builder
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="info-product">
                                    <div className="item_title">
                                      mobile legends
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="info-product">
                                    <div className="item_title">
                                      mobile app ui ux design
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="info-product">
                                    <div className="item_title">
                                      mobile game app development
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="info-product">
                                    <div className="item_title">
                                      mobile app design
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-3"></div>
                  <div className="col-md-3 col-lg-2 col-xl-3">
                    <div className="text-center text-xl-start">
                      <button
                        className="ud-btn btn-thm w-100 bdrs60"
                        type="button"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt20 animate-up-4">
                <div className="col-xl-9">
                  <div className="row justify-content-between">
                    <div className="col-6 col-sm-3 funfact_one at-home2-hero">
                      <div className="details">
                        <ul className="ps-0 mb-0 d-flex">
                          <li>
                            <div className="timer">834</div>
                          </li>
                          <li>
                            <span>M</span>
                          </li>
                        </ul>
                        <p className="text-white mb-0">Total Freelancer</p>
                      </div>
                    </div>
                    <div className="col-6 col-sm-3 funfact_one at-home2-hero">
                      <div className="details">
                        <ul className="ps-0 mb-0 d-flex">
                          <li>
                            <div className="timer">732</div>
                          </li>
                          <li>
                            <span>M</span>
                          </li>
                        </ul>
                        <p className="text-white mb-0">Positive Review</p>
                      </div>
                    </div>
                    <div className="col-6 col-sm-3 funfact_one at-home2-hero">
                      <div className="details">
                        <ul className="ps-0 mb-0 d-flex">
                          <li>
                            <div className="timer">90</div>
                          </li>
                          <li>
                            <span>M</span>
                          </li>
                        </ul>
                        <p className="text-white mb-0">Order recieved</p>
                      </div>
                    </div>
                    <div className="col-6 col-sm-3 funfact_one at-home2-hero pe-0">
                      <div className="details">
                        <ul className="ps-0 mb-0 d-flex">
                          <li>
                            <div className="timer">236</div>
                          </li>
                          <li>
                            <span>M</span>
                          </li>
                        </ul>
                        <p className="text-white mb-0">Projects Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 d-none d-xl-block position-relative">
            <img
              src="/assets/images/about/about-1.png"
              alt=""
              className="animate-up-1 main-img-home2"
            />
            <div className="home2-hero-content position-relative">
              <div
                className="iconbox-small1 d-none d-xl-flex wow fadeInRight default-box-shadow4 bounce-x animate-up-1 animated"
                style={{ visibility: "visible", animationName: "bounceX" }}
              >
                <span className="icon flaticon-review"></span>
                <div className="details pl20">
                  <h6 className="mb-1">Proof of quality</h6>
                  <p className="text fz13 mb-0">Lorem Ipsum Dolar Amet</p>
                </div>
              </div>
              <div
                className="iconbox-small2 d-none d-xl-flex wow fadeInLeft default-box-shadow4 bounce-y animate-up-2 animated"
                style={{ visibility: "visible", animationName: "bounceY" }}
              >
                <span className="icon flaticon-review"></span>
                <div className="details pl20">
                  <h6 className="mb-1">Safe and secure</h6>
                  <p className="text fz13 mb-0">Lorem Ipsum Dolar Amet</p>
                </div>
              </div>
              <img
                src="/assets/images/about/happy-client.png"
                alt=""
                className="bounce-x bdrs16 img-1 default-box-shadow4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
