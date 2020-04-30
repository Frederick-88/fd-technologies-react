import React from "react";
import image from "../../assets/photo1.png";
import "../style.css";

export default function Contact() {
  return (
    <div>
      <div className="container text-center">
        <h1 className="pt-4">CONTACT</h1>
        <hr className="underline-hr"></hr>

        <div className="row mt-4">
          <div className="col bg-primary text-white pt-4 pb-4 mb-3 mr-3">
            <div className="d-flex justify-content-center">
              <i class="fas fa-map-marker-alt fa-2x"></i>
              <h4 className="font-weight-bold text-white pl-3">Locate Us</h4>
            </div>

            <h6 className="text-white pt-3">Batam,Kepulauan Riau,Indonesia.</h6>
          </div>

          <div className="col bg-primary text-white pt-4 pb-4 mb-3 mr-3">
            <div className="d-flex justify-content-center">
              <i class="fas fa-phone-square-alt fa-2x"></i>
              <h4 className="font-weight-bold text-white pl-3">
                Give us a call/WA
              </h4>
            </div>

            <h5 className="text-white pt-3">0858-3599-8805</h5>
          </div>

          <div className="col bg-primary text-white pt-4 pb-4 mb-3">
            <div className="d-flex justify-content-center">
              <i class="far fa-envelope fa-2x"></i>
              <h4 className="font-weight-bold text-white pl-3">
                Contact via gmail
              </h4>
            </div>

            <h6 className="text-white pt-3">frederick@fdtech.asia</h6>
          </div>
        </div>
      </div>

      <div className="bg-primary mb-4">
        <h1 className=" text-white text-center pt-4">
          Let's create stunning solutions together.
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src={image} alt="..." style={{ width: "26rem" }} />
            </div>

            <div className="col-md-6 col-sm-12 pt-5">
              <a
                target="blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=frederick@fdtech.asia&body=Hi! Please kindly input your message here."
              >
                <button className="contact-b-fx text-white h3 w-100 pt-3 pb-3 mb-4 mt-4">
                  SEND US A GMAIL
                  <i class="fas fa-arrow-circle-right pl-3"></i>
                </button>
              </a>
              <h2 className="text-white text-center">OR</h2>
              <a target="blank" href="https://wa.link/zb52ft">
                <button className="contact-b2-fx text-white h3 w-100 pt-3 pb-3 mt-4">
                  CHAT US VIA WHATSAPP
                  <i class="fas fa-arrow-circle-right pl-3"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
