import React from "react";
import image from "../../assets/vector.png";
import "../style.css";

export default function Contact() {
  return (
    <div>
      <div className="container text-center contact-media">
        <h1 className="pt-4 h1-skill-expe">CONTACT</h1>
        <hr className="underline-hr"></hr>

        <div className="row mt-4 contact-row">
          <div className="col-xl-4 col-md-4 col-sm-12 text-white bg-primary pt-4 pb-4 mb-3">
            <div className="d-flex justify-content-center">
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <h4 className="font-weight-bold text-white">Locate Us</h4>
            </div>

            <h6 className="text-white pt-4">
              Batam,Kepulauan Riau ,Indonesia.
            </h6>
          </div>

          <div className="col-xl-4 col-md-4 col-sm-12 text-white div-contact-call">
            <div className="bg-primary pt-4 pb-4 mb-3 div-contact-call-card">
              <div className="d-flex justify-content-center">
                <i className="fas fa-phone-square-alt fa-2x"></i>
                <h4 className="font-weight-bold text-white">
                  Give us a call / WA
                </h4>
              </div>

              <h5 className="text-white pt-3">0858-3599-8805</h5>
            </div>
          </div>

          <div className="col-xl-4 col-md-4 col-sm-12 text-white bg-primary pt-4 pb-4 mb-3">
            <div className="d-flex justify-content-center">
              <i className="far fa-envelope fa-2x"></i>
              <h4 className="font-weight-bold text-white">Contact via gmail</h4>
            </div>

            <h6 className="text-white pt-3">frederick@fdtech.asia</h6>
          </div>
        </div>
      </div>

      <div className="bg-primary mb-4 div-contact">
        <h1 className=" text-white text-center pt-4">
          Let's create stunning solutions together.
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-md-6 col-sm-12">
              <img src={image} alt="..." className="img-contact" />
            </div>

            <div className="col-xl-7 col-md-6 col-sm-12 contact-button">
              <a
                target="blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=frederick@fdtech.asia&body=Hi! Please kindly input your message here."
              >
                <button className="contact-b-fx text-white">
                  SEND US A GMAIL
                  <i className="fas fa-arrow-circle-right pl-3"></i>
                </button>
              </a>
              <h3 className="text-white text-center">OR</h3>
              <a target="blank" href="https://wa.link/zb52ft">
                <button className="contact-b2-fx text-white">
                  CHAT US VIA WHATSAPP
                  <i className="fas fa-arrow-circle-right pl-3"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
