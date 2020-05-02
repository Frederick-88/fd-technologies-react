import React from "react";
import { Link } from "react-router-dom";
import cv from "../assets/cv.jpg";
import image1 from "../assets/impactbyte.png";
import image2 from "../assets/ff.jpg";
import image3 from "../assets/infinity.jpeg";
import Photo from "../assets/photo1.png";
import "./style.css";

export default function componentName() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            {/* d-none d-sm-block -- buat image ilang klau kecil */}
            <img src={Photo} className="img-fx" alt="..." />
          </div>

          <div className="div-intro col-md-6 col-sm-12 mt-5">
            <h1 className="pt-5 ">HI, I'm Frederick.</h1>
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
                <button
                  type="button"
                  className="btn btn-outline-primary button-intro ml-3 "
                >
                  Let's Work Together
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="div-bg-2 text-center">
        <div className="container">
          <h2 className="text-white pt-4 pb-2">SKILLS</h2>
          <div className="row d-flex justify-content-center">
            <div className="col-md-3 col-sm-12">
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

            <div className="col-md-3 col-sm-12">
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

            <div className="col-md-3 col-sm-12">
              <div className="card bg-secondary mb-3">
                <div className="card-body">
                  <i className="fab fa-js-square fa-3x pb-3"></i>
                  <h4 className="card-title">JAVASCRIPT</h4>

                  <span className="dot bg-success"></span>
                  <span className="dot bg-success"></span>
                  <span className="dot"></span>

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

      <div className="container text-center">
        <h2 className="pt-5 pb-3">EXPERIENCE</h2>
        <div className="row d-flex justify-content-center">
          <div className="col-md-3 col-sm-12">
            <div class="card text-white bg-primary mb-3 ">
              <img src={image1} className="expe-img-fx" alt="..." />
              <div class="card-body">
                <h4 class="card-title">Impact Byte Fullstack Bootcamp</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-12">
            <div class="card text-white bg-primary mb-3">
              <img src={image3} className="expe-img-fx" alt="..." />
              <div class="card-body">
                <h4 class="card-title">
                  CV Infinity Batam <br />
                  <span className="h6 card-title">(eXotica Batam)</span>
                </h4>

                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-12">
            <div class="card text-white bg-primary mb-3">
              <img src={image2} className="expe-img-fx" alt="..." />
              <div class="card-body">
                <h4 class="card-title">
                  PT Fingerfast Laboratory <br />
                </h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
