import React from 'react'

export default function HomeJoinNetwork() {
  return (
    <section className="our-cta bgc-thm4 pt90 pb90 pt60-md pb60-md mt100 mt0-lg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-lg-7 col-xl-5 wow fadeInLeft" style={{ visibility: "visible", animationName: "fadeInLeft"}}>
            <div className="cta-style3">
              <h2 className="cta-title">Find the talent needed to get your business growing.</h2>
              <p className="cta-text">Advertise your jobs to millions of monthly users and search 15.8 million CVs</p>
              <a href="page-contact.html" className="ud-btn btn-thm2">Get Started <i className="fal fa-arrow-right-long"></i></a>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 col-xl-5 position-relative wow zoomIn" style={{ visibility: "visible", animationName: "zoomIn"}}>
            <div className="cta-img">
              <img className="w-100" src="/assets/images/about/about-3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
