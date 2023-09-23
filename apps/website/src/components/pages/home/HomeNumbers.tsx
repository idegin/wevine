import React from "react";

export default function HomeNumbers() {
  return (
    <section className="hover-bgc-color pb90 pb30-md overflow-hidden  cta-home5-style ml30 ml0-lg">
      <img
        className="left-top-img wow zoomIn d-none d-lg-block"
        src="/assets/images/vector-img/left-top.png"
        alt=""
        style={{ visibility: "visible", animationName: "zoomIn" }}
      />
      <img
        className="right-bottom-img wow zoomIn d-none d-lg-block"
        src="/assets/images/vector-img/right-bottom.png"
        alt=""
        style={{ visibility: "visible", animationName: "zoomIn" }}
      />
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-md-6 col-xl-4 wow fadeInRight"
            data-wow-delay="100ms"
            style={{
              visibility: "visible",
              animationDelay: "100ms",
              animationName: "fadeInRight",
            }}
          >
            <div className="cta-style6 mb30-sm">
              <h2 className="cta-title mb25">
                Find the talent needed to <br className="d-none d-lg-block" />
                get your business growing.
              </h2>
              <p className="text-thm2 fz15 mb25">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                <br className="d-none d-md-block" /> do eiusmod tempor
                incididunt.
              </p>
              <a href="page-contact.html" className="ud-btn btn-thm2">
                Get Started <i className="fal fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-xl-6 offset-xl-2 wow fadeInLeft"
            data-wow-delay="300ms"
            style={{
              visibility: "visible",
              animationDelay: "300ms",
              animationName: "fadeInLeft",
            }}
          >
            <div className="row align-items-center position-relative">
              <div className="home9-floating-img position-absolute">
                <img
                  className="w-100-lg"
                  src="/assets/images/about/element-6.png"
                  alt=""
                />
              </div>
              <div className="col-sm-6">
                <div className="funfact-style1 at-home5 bdrs16 text-center ms-md-auto">
                  <ul className="ps-0 mb-0 d-flex justify-content-center">
                    <li>
                      <div className="timer title mb15">4</div>
                    </li>
                    <li>
                      <span>.9/5</span>
                    </li>
                  </ul>
                  <p className="fz15 dark-color">
                    Clients rate <br />
                    professionals on Freeio
                  </p>
                </div>
                <div className="funfact-style1 at-home5 bdrs16 text-center ms-md-auto">
                  <ul className="ps-0 mb-0 d-flex justify-content-center">
                    <li>
                      <div className="timer title mb15">96</div>
                    </li>
                    <li>
                      <span>%</span>
                    </li>
                  </ul>
                  <p className="fz15 dark-color">
                    95% of customers are satisfied through to see their <br />
                    freelancers
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="funfact-style1 at-home5 bdrs16 text-center">
                  <ul className="ps-0 mb-0 d-flex justify-content-center">
                    <li>
                      <div className="title mb15">Award</div>
                    </li>
                  </ul>
                  <p className="fz15 dark-color">
                    G2’s 2021 Best <br />
                    Software Awards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
