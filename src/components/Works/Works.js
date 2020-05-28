import React, { Component } from "react";
import Slider from "react-slick";
import "./works.css";

export default class CenterMode extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <div>
        <div className="d-flex d-row justify-content-center my-3">
          <p className="mr-auto ml-4 my-0" onClick={this.previous}>
            <i class="fas fa-arrow-circle-left fa-2x" />
          </p>
          <h2 className="my-0">PROJECTS</h2>
          <p className="ml-auto mr-4 my-0" onClick={this.next}>
            <i class="fas fa-arrow-circle-right fa-2x" />
          </p>
        </div>
        <div className="mt-3 mb-5">
          <Slider ref={(slider) => (this.slider = slider)} {...settings}>
            <div className="bg-danger">
              <h3>DIV 1</h3>
            </div>
            <div className="bg-success">
              <h3>2</h3>
            </div>
            <div className="bg-warning">
              <h3>3</h3>
            </div>
            <div className="bg-info">
              <h3>4</h3>
            </div>
            <div className="bg-warning">
              <h3>5</h3>
            </div>
            <div className="bg-info">
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
