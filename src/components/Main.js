import React from "react";
import { Link } from "react-router-dom";
import cv from "../assets/cv.jpg";
import image1 from "../assets/impactbyte.png";
import image2 from "../assets/ff.jpg";
import image3 from "../assets/infinity.jpeg";
import Photo from "../assets/photo1.png";
// import Photo from "../assets/fred.png";
import "./style.css";

export default function componentName() {
  return (
    <div>
      {/* DIV SATU */}
      <div className="container">
        <div className="row">
          {/* d-none d-sm-block -- buat image ilang klau kecil */}
          <div className="col-md-6 col-sm-12 main-col-1 order-xl-1">
            <img src={Photo} className="img-fx" alt="..." />
          </div>

          <div className="div-intro col-md-6 col-sm-12 main-col-2 order-xl-0">
            <h1>HI, I'm Frederick.</h1>
            <h4 className="pt-3">
              I'm an upcoming FullStack Developer. Currently taking Fullstack
              Major on Glints Academy Bootcamp Batam.
            </h4>

            <h4 className=" mt-4">Take a look on My CV below --- </h4>
            <div className="mt-4">
              <a href={cv} download="My CV">
                <button type="button" className="btn btn-outline-primary ">
                  Download My CV Here
                </button>
              </a>
              <Link to="/contact">
                <button type="button" className="btn btn-outline-primary ml-3">
                  Let's Work Together
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* DIV SATU */}

      {/* DIV KEDUA */}
      <div className="div-bg-2 text-center">
        <div className="container main-row-b">
          <h2 className="text-white pt-4 pb-2">SKILLS</h2>
          <div className="row d-flex justify-content-center">
            <div className="col-xl-3 col-md-4 col-sm-12">
              <div className="card bg-secondary mb-3">
                <div className="card-body">
                  <i className="fab fa-react fa-3x pb-3"></i>
                  <h4 className="card-title">React JS</h4>

                  <span className="dot bg-success"></span>
                  <span className="dot bg-success"></span>
                  <span className="dot"></span>

                  <p className="instruction-fx pt-3">BEGINNER/STANDARD/PRO</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-sm-12">
              <div className="card bg-secondary mb-3">
                <div className="card-body">
                  <i className="fab fa-chrome fa-3x pb-3"></i>
                  <h4 className="card-title">RESPONSIVE DESIGN</h4>

                  <span className="dot bg-success"></span>
                  <span className="dot bg-success"></span>
                  <span className="dot"></span>

                  <p className="instruction-fx pt-3">BEGINNER/STANDARD/PRO</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-sm-12">
              <div className="card bg-secondary mb-3">
                <div className="card-body">
                  <i className="fas fa-server fa-3x pb-3"></i>
                  <h4 className="card-title">REST API</h4>

                  <span className="dot bg-success"></span>
                  <span className="dot bg-success"></span>
                  <span className="dot bg-primary"></span>

                  <p className="instruction-fx pt-3">BEGINNER/STANDARD/PRO</p>
                </div>
              </div>
            </div>
          </div>

          <Link to="/skills">
            <button
              type="button"
              className="btn btn-outline-success btn-fx pl-5 pr-5 mt-2 mb-4"
            >
              See More in Skills
            </button>
          </Link>
        </div>
      </div>
      {/* DIV KEDUA */}

      {/* DIV KETIGA */}
      <div className="container text-center main-row-expe">
        <h2 className="pt-5 pb-3">EXPERIENCE</h2>
        <div className="row d-flex justify-content-center">
          <div className="col-xl-3 col-md-4 col-sm-12 d-flex justify-content-center">
            <div className="card text-white bg-primary mb-3 expe-card">
              <img src={image1} className="expe-img-fx" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Impact Byte Fullstack Bootcamp</h4>
                <p className="card-text">
                  Intensive Bootcamp in Fullstack Major, Learnt Frontend &
                  Backend Lessons. Learnt ReactJS, ReactRedux, ExpressJS,
                  Javascript, Bootstrap, Etc.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-4 col-sm-12 d-flex justify-content-center">
            <div className="card text-white bg-primary mb-3 expe-card">
              <img src={image3} className="expe-img-fx" alt="..." />
              <div className="card-body">
                <h4 className="card-title">
                  CV Infinity Batam <br />
                  <span className="h6 card-title">(eXotica Batam)</span>
                </h4>

                <p className="card-text">
                  As Senior Graphic Designer, creating 3D Interior & Graphic
                  Designs creations, managing Junior team, held meetings with
                  big companies in batam like PT JOTUN, SIIX, PHILIPS, etc.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-4 col-sm-12 d-flex justify-content-center">
            <div className="card text-white bg-primary mb-3 expe-card">
              <img src={image2} className="expe-img-fx" alt="..." />
              <div className="card-body">
                <h4 className="card-title">
                  PT Fingerfast Laboratory <br />
                </h4>
                <p className="card-text">
                  As Intern Graphic Designer, creating Designs, create videos,
                  collaborate in online-queue-ticket-booking application for
                  hospital, create advertisements to support our team better.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/experience">
          <button
            type="button"
            className="btn btn-outline-primary btn-fx pl-5 pr-5 mt-2 mb-4"
          >
            See More in Experience
          </button>
        </Link>
      </div>
    </div>
  );
}
