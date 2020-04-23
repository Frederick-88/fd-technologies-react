import React from "react";
import Photo from "../assets/photo1.png";

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
            <button type="button" class="btn btn-outline-primary mt-4">
              Download My CV Here
            </button>
          </div>

          <div className="col">
            <img src={Photo} className="img-fluid" alt="..." />
          </div>
        </div>

        <div> 
          
        </div>

      </div>

    </div>
  );
}
