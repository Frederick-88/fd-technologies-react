import React from "react";
import Photo from "../assets/photo1.png";
import "./style.css";

export default function componentName() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <h1 className="pt-5">HI, I'm Frederick.</h1>
            <h4 className="pt-3">
              I'm an upcoming FullStack Developer. Currently taking Fullstack
              Major on Glints Academy Bootcamp Batam.
            </h4>

            <h4 className=" mt-4">Take a look on My CV below --- </h4>
            <div className="mt-4">
              <button type="button" className="btn btn-outline-primary ">
                Download My CV Here
              </button>

              <a href="https://id.linkedin.com/" target="blank">
              <i className="fab fa-linkedin fa-3x icon-fx-b pl-4" />
              </a>
              <a href="https://mail.google.com/" target="blank">
                <i
                  className="far fa-envelope fa-3x icon-fx-b pl-4"
                />
              </a>
            </div>
          </div>

          <div className="col">
            <img src={Photo} className="img-fx" alt="..." />
          </div>
        </div>
      </div>

      <div className="div-bg-2 text-center">
        <div className="container">
          <h2 className="text-white pt-4 pb-2">SKILLS</h2>
          <div className="row d-flex justify-content-center">
            
            <div className="card bg-secondary mb-3 col-3 mr-3">
              <div className="card-body">
                <i className="fab fa-react fa-3x pb-3"></i>
                <h4 className="card-title">React JS</h4>

                <span className="dot bg-success"></span>
                <span className="dot bg-success"></span>
                <span className="dot"></span>

                <p className="instruction-fx pt-3">BEGINNER/STANDARD/PRO</p>
              </div>
            </div>

            <div className="card bg-secondary mb-3 col-3 mr-3">
              <div className="card-body">
                <i className="fab fa-bootstrap fa-3x pb-3"></i>
                <h4 className="card-title">BOOTSTRAP</h4>

                <span className="dot bg-success"></span>
                <span className="dot bg-success"></span>
                <span className="dot bg-success"></span>

                <p className="instruction-fx pt-3">BEGINNER/STANDARD/PRO</p>
              </div>
            </div>

            <div className="card bg-secondary mb-3 col-3">
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
          <button
            type="button"
            className="btn btn-outline-success btn-fx pl-5 pr-5 mt-2 mb-4"
          >
            See More in SKills
          </button>
        </div>
      </div>

      <div className="container text-center">
        <h2 className="pt-5 pb-3">EXPERIENCE</h2>
        <div className="row d-flex justify-content-center">
          <div class="card text-white bg-primary mr-3 mb-3 col ">
            <img
              src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png"
              className="expe-img-fx"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-title">Primary card title</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div class="card text-white bg-primary mr-3 mb-3 col">
            <img
              src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png"
              className="expe-img-fx"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-title">Primary card title</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div class="card text-white bg-primary mb-3 col">
            <img
              src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png"
              className="expe-img-fx"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-title">Primary card title</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-outline-primary btn-fx pl-5 pr-5 mt-2 mb-4"
        >
          See More in Experience
        </button>
      </div>
      
    </div>
  );
}
