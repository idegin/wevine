import React from "react";

export default function HomeStartProject() {
  return (
    <>
      <section
        className="breadcumb-section wow fadeInUp mt40"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <div className="cta-commmon-v1 cta-banner bgc-thm2 mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg">
          <img
            className="left-top-img wow zoomIn"
            src="/assets/images/vector-img/left-top.png"
            alt=""
            style={{ visibility: "visible", animationName: "zoomIn" }}
          />
          <img
            className="right-bottom-img wow zoomIn"
            src="/assets/images/vector-img/right-bottom.png"
            alt=""
            style={{ visibility: "visible", animationName: "zoomIn" }}
          />
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div
                  className="position-relative wow fadeInUp"
                  data-wow-delay="300ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "300ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <h2 className="text-white">Contact us</h2>
                  <p className="text mb0 text-white">
                    We'd love to talk about how we can help you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div
            className="row wow fadeInUp"
            data-wow-delay="300ms"
            style={{
              visibility: "visible",
              animationDelay: "300ms",
              animationName: "fadeInUp",
            }}
          >
            <div className="col-lg-6">
              <div className="position-relative mt40">
                <div className="main-title">
                  <h4 className="form-title mb25">Keep In Touch With Us.</h4>
                  <p className="text">
                    Neque convallis a cras semper auctor. Libero id faucibus
                    nisl tincidunt egetnvallis.
                  </p>
                </div>
                <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                  <div className="icon flex-shrink-0">
                    <span className="flaticon-tracking"></span>
                  </div>
                  <div className="details">
                    <h5 className="title">Address</h5>
                    <p className="mb-0 text">
                      328 Queensberry Street, North <br /> Melbourne VIC 3051,
                      Australia.
                    </p>
                  </div>
                </div>
                <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                  <div className="icon flex-shrink-0">
                    <span className="flaticon-call"></span>
                  </div>
                  <div className="details">
                    <h5 className="title">Phone</h5>
                    <p className="mb-0 text">+(0) 392 94 03 01</p>
                  </div>
                </div>
                <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                  <div className="icon flex-shrink-0">
                    <span className="flaticon-mail"></span>
                  </div>
                  <div className="details">
                    <h5 className="title">Email</h5>
                    <p className="mb-0 text">hello@freeio.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-page-form default-box-shadow1 bdrs8 bdr1 p50 mb30-md bgc-white">
                <h4 className="form-title mb25">Tell us about yourself</h4>
                <p className="text mb30">
                  Whether you have questions or you would just like to say
                  hello, contact us.
                </p>
                <form action="#" className="form-style1">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb20">
                        <label
                          className="heading-color ff-heading fw500 mb10"
                          htmlFor=""
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ali"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb20">
                        <label
                          className="heading-color ff-heading fw500 mb10"
                          htmlFor=""
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Tufan"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb20">
                        <label
                          className="heading-color ff-heading fw500 mb10"
                          htmlFor=""
                        >
                          Messages
                        </label>
                        <textarea
                          name=""
                          id=""
                          cols={30}
                          rows={6}
                          placeholder="Description"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="">
                        <a className="ud-btn btn-thm" href="page-contact.html">
                          Send Messages
                          <i className="fal fa-arrow-right-long"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
