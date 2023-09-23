import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="header-nav nav-homepage-style stricky main-menu border-0 slideIn animated">
      <nav className="posr">
        <div className="container posr">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto px-0 px-xl-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="logos">
                  <a className="header-logo logo1" href="index.html">
                    <img
                      src="/assets/images/header-logo.svg"
                      alt="Header Logo"
                    />
                  </a>
                  <a className="header-logo logo2" href="index.html">
                    <img
                      src="/assets/images/header-logo2.svg"
                      alt="Header Logo"
                    />
                  </a>
                </div>

                <ul
                  id="respMenu"
                  className="ace-responsive-menu"
                  data-menu-style="horizontal"
                >
                  <li className="visible_list">
                    {" "}
                    <a className="list-item" href="#">
                      <span className="title">Home</span>
                    </a>
                  </li>
                  <li className="visible_list">
                    {" "}
                    <a className="list-item" href="#">
                      <span className="title">Browse Jobs</span>
                    </a>
                  </li>
                  <li className="visible_list">
                    {" "}
                    <a className="list-item" href="#">
                      <span className="title">Users</span>
                    </a>
                  </li>
                  <li className="visible_list">
                    {" "}
                    <a className="list-item" href="#">
                      <span className="title">Pages</span>
                    </a>
                  </li>
                  <li className="">
                    {" "}
                    <a className="list-item pe-0" href="page-contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto pe-0 pe-xl-3">
              <div className="d-flex align-items-center">
                <a
                  className="login-info"
                  data-bs-toggle="modal"
                  href="#exampleModalToggle"
                  role="button"
                >
                  <span className="flaticon-loupe"></span>
                </a>
                <a
                  className="login-info mx15-xl mx30"
                  href="page-become-seller.html"
                >
                  <span className="d-none d-xl-inline-block">Become a</span>{" "}
                  Seller
                </a>
                <a className="login-info mr15-xl mr30" href="page-login.html">
                  Login
                </a>
                <a
                  className="ud-btn btn-white add-joining bdrs50 text-thm2"
                  href="page-register.html"
                >
                  Start A Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
