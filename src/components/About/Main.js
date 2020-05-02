import React from "react";
import cv from "../../assets/cv.jpg";
import myImg from "../../assets/photo.jpeg";

export default function About() {
  return (
    <div className="container mb-4 div-about">
      <h1 className="pt-4 text-center">ABOUT</h1>
      <hr className="underline-hr"></hr>

      <div className="row pt-4">
        <div className="col-md-3">
          <img src={myImg} className="w-100" alt="..." />
        </div>

        <div className="col-md-9 pl-4">
          <h2 className="pt-2">HELLO, I'M FREDERICK.</h2>
          <h5 className="pt-2">
            i believe new challenges and obstacles are made for a better version
            of me.
            <br />
            <br />I believe the more value we possess/give, the better we are
            gonna be and receive, so i always give maximum effort in my works.
            <br />
            <br />
            "How can i do things better?" is the most frequent question i ask to
            myself.
            <br />
            <br />I could work by individual and team depends on company needs.
            i trust in every condition, there are space to grow and chance to
            learn more. So i used to give my best in any condition.
          </h5>
          <a href={cv} download="My CV">
            <button type="button" className="btn btn-outline-primary mt-2">
              Download My CV Here
            </button>
          </a>
        </div>
      </div>

      <div></div>
    </div>
  );
}
