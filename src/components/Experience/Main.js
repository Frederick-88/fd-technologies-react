import React from "react";
import image1 from "../../assets/impactbyte.png";
import image2 from "../../assets/ff.jpg";
import image3 from "../../assets/infinity.jpeg";
import image4 from "../../assets/leader.png";
import image5 from "../../assets/elsa.png";
import image6 from "../../assets/exive.jpeg";
import image7 from "../../assets/volunteer.png";
import image8 from "../../assets/progate.png";
import "../style.css";

export default function Experience() {
  return (
    <div className="container text-center main-row-expe">
      <h1 className="pt-4 h1-skill-expe">EXPERIENCE</h1>
      <hr className="underline-hr mb-5"></hr>

      <div className="row">
        <div className=" col-xl-3 col-md-4 col-sm-6">
          <div className="card text-white bg-primary mb-3">
            <img src={image1} className="expe-img-fx" alt="..." />
            <div className="card-body card-body-fx">
              <h4 className="card-title">Impact Byte Fullstack Bootcamp</h4>
              <p className="card-text">
                Intensive Bootcamp in Fullstack Major, Learnt Frontend & Backend
                Lessons. Learnt ReactJS, ReactRedux, ExpressJS, Javascript,
                Bootstrap, Etc.
              </p>
            </div>
          </div>
        </div>

        <div className=" col-xl-3 col-md-4 col-sm-6">
          <div className="card text-white bg-primary mb-3">
            <img src={image3} className="expe-img-fx" alt="..." />
            <div className="card-body card-body-fx">
              <h4 className="card-title">
                Infinity Batam <br />
                <span className="h5 card-title">(eXotica Batam)</span>
              </h4>
              <p className="card-text">
                As Senior Graphic Designer, creating 3D Interior & Graphic
                Designs creations, managing Junior team, held meetings with big
                companies in batam like PT JOTUN, SIIX, PHILIPS, etc.
              </p>
            </div>
          </div>
        </div>

        <div className=" col-xl-3 col-md-4 col-sm-6">
          <div className="card text-white bg-primary mb-3">
            <img src={image2} className="expe-img-fx" alt="..." />
            <div className="card-body card-body-fx">
              <h4 className="card-title">Fingerfast Laboratory</h4>
              <p className="card-text">
                As Intern Graphic Designer, creating Designs, create videos,
                collaborate in online-queue-ticket-booking application for
                hospital, create advertisements to support our team better.
              </p>
            </div>
          </div>
        </div>

        <div className=" col-xl-3 col-md-4 col-sm-6">
          <div className="card text-white bg-primary mb-3">
            <img src={image4} className="expe-img-fx" alt="..." />
            <div className="card-body card-body-fx">
              <h5 className="card-title">
                Leader of Maitreyawira's English Debate Club
              </h5>
              <p className="card-text">
                Managing Juniors, improve talents, participated in several
                competitions with teammates, develop this team to their best
                versions.
              </p>
            </div>
          </div>
        </div>

        <div className=" col-xl-3 col-md-4 col-sm-6">
          <div className="card text-white bg-primary mb-3">
            <img
              src={image8}
              className="expe-img-fx"
              alt="..."
              style={{ height: "250px" }}
            />
            <div className="card-body card-body-fx">
              <h4 className="card-title">
                Progate Development Training Program
              </h4>
              <p className="card-text">
                Practicing codes, Improve our critical thinking skill &
                knowledge on real life coding.
              </p>
            </div>
          </div>
        </div>

        <div className=" col-xl-3 col-md-4 col-sm-6">
          <div className="card text-white bg-primary mb-3">
            <img src={image6} className="expe-img-fx" alt="..." />
            <div className="card-body card-body-fx">
              <h4 className="card-title">Collaboration with Exive Interior</h4>
              <p className="card-text">
                Creating 3D Interior & Exterior of "MICHS BATIK" store, an
                Interior with Batik & elegant theme
              </p>
            </div>
          </div>
        </div>

        <div className=" col-xl-3 col-md-4 col-sm-6">
          <div className="card text-white bg-primary mb-3">
            <img src={image7} className="expe-img-fx" alt="..." />
            <div className="card-body card-body-fx">
              <h5 className="card-title">
                Maitreyawira Charity Bazaar Volunteer
              </h5>
              <p className="card-text">
                Never forget to help others and feed our positive mind! Helping
                is good!
              </p>
            </div>
          </div>
        </div>

        <div className=" col-xl-3 col-md-4 col-sm-6">
          <div className="card text-white bg-primary mb-3">
            <img src={image5} className="expe-img-fx" alt="..." />
            <div className="card-body card-body-fx">
              <h4 className="card-title">Elsa speak training program</h4>
              <p className="card-text">
                English language speaking training, trained to develop the way i
                communicate to more people!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
