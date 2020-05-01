import React from "react";
import image1 from "../../assets/impactbyte.png";
import image2 from "../../assets/ff.jpg";
import image3 from "../../assets/infinity.jpeg";
import image4 from "../../assets/photo1.png";
import image5 from "../../assets/elsa.png";
import image6 from "../../assets/exive.jpeg";
import image7 from "../../assets/volunteer.png";
import image8 from "../../assets/progate.png";

export default function Experience() {
  return (
    <div className="container text-center">
      <h1 className="pt-4">EXPERIENCE</h1>
      <hr className="underline-hr"></hr>

      <div className="row">
        <div className="col-md-3 col-sm-12">
          <div class="card text-white bg-primary mb-3">
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
                Infinity Batam <br />
                <span className="h5 card-title">(eXotica Batam)</span>
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
              <h4 class="card-title">Fingerfast Laboratory</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-12">
          <div class="card text-white bg-primary mb-3">
            <img src={image4} className="expe-img-fx" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                Leader of Maitreyawira's English Debate Club
              </h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-12">
          <div class="card text-white bg-primary mb-3">
            <img src={image5} className="expe-img-fx" alt="..." />
            <div class="card-body">
              <h4 class="card-title">ELSA SPEAK TRAINING PROGRAM</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-12">
          <div class="card text-white bg-primary mb-3">
            <img src={image6} className="expe-img-fx" alt="..." />
            <div class="card-body">
              <h4 class="card-title">Collaboration with Exive Interior</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-12">
          <div class="card text-white bg-primary mb-3">
            <img src={image7} className="expe-img-fx" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Maitreyawira Charity Bazaar Volunteer</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-12">
          <div class="card text-white bg-primary mb-3">
            <img src={image8} className="expe-img-fx" alt="..." />
            <div class="card-body">
              <h4 class="card-title">Progate Development Training Program</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
