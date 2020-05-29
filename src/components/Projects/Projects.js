import React, { Component } from "react";
import Slider from "react-slick";
import image from "../../assets/works.png";
import image1 from "../../assets/works1.png";
import image2 from "../../assets/works2.png";
import image3 from "../../assets/works3.png";
import image4 from "../../assets/works4.png";
import "./Projects.css";

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
            <div>
              <div className="card text-primary">
                <img
                  src={image3}
                  className="slider-img align-self-center"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Circle Messenger</h5>
                  <p className="card-text">
                    Never forget to help others and feed our positive mind!
                    Helping is good!
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="card text-primary">
                <img
                  src={image2}
                  className="slider-img align-self-center"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">FD-Library</h5>
                  <p className="card-text">
                    Never forget to help others and feed our positive mind!
                    Helping is good!
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="card text-primary">
                <img
                  src={image}
                  className="slider-img align-self-center"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">FDTECH.ASIA</h5>
                  <p className="card-text">
                    Never forget to help others and feed our positive mind!
                    Helping is good!
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="card text-primary">
                <img
                  src={image4}
                  className="slider-img align-self-center"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Indonesia National Heroes</h5>
                  <p className="card-text">
                    This project is originated from a task that given at Glints
                    Academy Bootcamp. I responsible to fetch data of indonesia
                    national heroes from
                    <br />
                    <a
                      href="https://heroes-indonesia.herokuapp.com/heroes/get"
                      target="blank"
                      className="h6"
                      style={{ color: "#007bff" }}
                    >
                      https://heroes-indonesia.herokuapp.com/heroes/get
                    </a>
                    <br />
                    and show it to users like a frontend developer.
                  </p>
                  <p className="my-0 font-weight-bold">
                    Tech: ReactJS,Bootstrap,RestAPI
                  </p>
                  <div className="d-flex d-row pt-3 justify-content-center  ">
                    <a
                      href="/static/media/works4.d20b007c.png"
                      target="blank"
                      className="project-link"
                    >
                      <i className="far fa-image fa-lg pr-2"></i>
                      Open Image
                    </a>

                    <a
                      href="/static/media/works4.d20b007c.png"
                      target="blank"
                      className="project-link"
                    >
                      <i className="far fa-image fa-lg pr-2"></i>
                      Check the website!
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card text-primary">
                <img
                  src={image1}
                  className="slider-img align-self-center"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Weather App</h5>
                  <p className="card-text">
                    Never forget to help others and feed our positive mind!
                    Helping is good!
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
