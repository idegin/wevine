import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <section className="footer-style1 at-home6 home2-footer-radius pt25 pb-0">
      <div className="container">
        <div className="row bb-white-light pb10 mb60-">
          <div className="col-md-7">
            <div className="d-block text-center text-md-start justify-content-center justify-content-md-start d-md-flex align-items-center mb-3 mb-md-0">
              <a className="fz17 fw500 text-white mr15-md mr30" href="#">
                Terms of Service
              </a>
              <a className="fz17 fw500 text-white mr15-md mr30" href="#">
                Privacy Policy
              </a>
              <a className="fz17 fw500 text-white" href="#">
                Site Map
              </a>
            </div>
          </div>
          <div className="col-md-5">
            <div className="social-widget text-center text-md-end">
              <div className="social-style1">
                <a className="text-white me-2 fw500 fz17" href="#">
                  Follow us
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f list-inline-item"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter list-inline-item"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram list-inline-item"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in list-inline-item"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}