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
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div className="d-flex d-row justify-content-center mt-3 mb-4">
          <p className="mr-auto ml-4 my-0" onClick={this.previous}>
            <i class="fas fa-arrow-circle-left fa-2x" />
          </p>
          <h2 className="my-0 project-header">PROJECTS</h2>
          <p className="ml-auto mr-4 my-0" onClick={this.next}>
            <i class="fas fa-arrow-circle-right fa-2x" />
          </p>
        </div>
        <div className="mt-3 mb-5 project-txt">
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
                    A Real-Time messenger app which is the final project in
                    glints academy bootcamp, users could send image, documents,
                    and even show expressions with emoji here!
                    <br />
                    <p className="mb-0 font-weight-bold mt-3">
                      Tech: ReactJS ,ReactRedux ,Bootstrap ,RestAPI ,GoogleCloud
                      ,CSS ,Javascript ,Database ,ExpressJS, MongoDB ,UI/UX
                    </p>
                    <div className="d-flex d-row pt-3 justify-content-center  ">
                      <a
                        href="/static/media/works3.deeba28f.png"
                        target="blank"
                        className="project-link"
                      >
                        <i className="far fa-image fa-lg pr-2"></i>
                        Open Image
                      </a>

                      <a
                        href="https://www.circlemessenger.com/"
                        target="blank"
                        className="project-link hide-inPhone"
                      >
                        <i className="fab fa-safari fa-lg pr-2"></i>
                        Check the website!
                      </a>
                    </div>
                    <a
                      href="/https://www.circlemessenger.com/"
                      target="blank"
                      className="project-link show-inPhone mt-2"
                    >
                      <i className="fab fa-safari fa-lg pr-2"></i>
                      Check the website!
                    </a>
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
                    An app which i build as a Fullstack(frontend & backend), in
                    this app you can add,edit,delete book,etc which i manage
                    with ExpressJS + MongoDB (Backend) & <br />
                    ReactJS + Redux (Frontend).
                    <p className="mb-0 font-weight-bold mt-3">
                      Tech: ReactJS ,ReactRedux ,Bootstrap ,RestAPI ,GoogleCloud
                      ,CSS ,Javascript ,Database ,UI/UX
                    </p>
                    <div className="d-flex d-row pt-3 justify-content-center  ">
                      <a
                        href="/static/media/works2.36b4f8ac.png"
                        target="blank"
                        className="project-link"
                      >
                        <i className="far fa-image fa-lg pr-2"></i>
                        Open Image
                      </a>

                      <a
                        href="https://fd-library.netlify.app/"
                        target="blank"
                        className="project-link hide-inPhone"
                      >
                        <i className="fab fa-safari fa-lg pr-2"></i>
                        Check the website!
                      </a>
                    </div>
                    <a
                      href="https://fd-library.netlify.app/"
                      target="blank"
                      className="project-link show-inPhone mt-2"
                    >
                      <i className="fab fa-safari fa-lg pr-2"></i>
                      Check the website!
                    </a>
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
                    This is my own personal website, at here i try to share with
                    you who am i and what are the things that i capable, you can
                    also access my personal web in phone & any other device too!
                    lets get to know each other.
                    <br />
                    <p className="mb-0 mt-3 font-weight-bold">
                      Tech: ReactJS ,Bootstrap ,Bootswatch ,CSS ,CSS Animation,
                      ReactSlick
                    </p>
                    <div className="d-flex d-row pt-3 justify-content-center  ">
                      <a
                        href="/static/media/works.7b68f80b.png"
                        target="blank"
                        className="project-link"
                      >
                        <i className="far fa-image fa-lg pr-2"></i>
                        Open Image
                      </a>

                      <a
                        href="https://fdtech.asia/"
                        target="blank"
                        className="project-link hide-inPhone"
                      >
                        <i className="fab fa-safari fa-lg pr-2"></i>
                        Check the website!
                      </a>
                    </div>
                    <a
                      href="https://fdtech.asia/"
                      target="blank"
                      className="project-link show-inPhone mt-2"
                    >
                      <i className="fab fa-safari fa-lg pr-2"></i>
                      Check the website!
                    </a>
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
                    1 of task in the Bootcamp, I responsible to fetch data of
                    indonesia national heroes from
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
                    Tech: ReactJS ,Bootstrap ,RestAPI ,Javascript
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
                      className="project-link hide-inPhone"
                    >
                      <i className="fab fa-safari fa-lg pr-2"></i>
                      Check the website!
                    </a>
                  </div>
                  <a
                    href="/static/media/works4.d20b007c.png"
                    target="blank"
                    className="project-link show-inPhone mt-2"
                  >
                    <i className="fab fa-safari fa-lg pr-2"></i>
                    Check the website!
                  </a>
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
                    1 of task in the Bootcamp, I responsible to fetch data of
                    weather from
                    <br />
                    <a
                      href="https://heroes-indonesia.herokuapp.com/heroes/get"
                      target="blank"
                      className="h6"
                      style={{ color: "#007bff" }}
                    >
                      https://api.openweatherapp.org/
                    </a>
                    <br />
                    and show it to users like a frontend developer.
                  </p>
                  <p className="my-0 font-weight-bold">
                    Tech: ReactJS ,Bootstrap ,RestAPI ,Javascript
                  </p>
                  <div className="d-flex d-row pt-3 justify-content-center  ">
                    <a
                      href="/static/media/works1.d88a9733.png"
                      target="blank"
                      className="project-link"
                    >
                      <i className="far fa-image fa-lg pr-2"></i>
                      Open Image
                    </a>

                    <a
                      href="/static/media/works4.d20b007c.png"
                      target="blank"
                      className="project-link hide-inPhone"
                    >
                      <i className="fab fa-safari fa-lg pr-2"></i>
                      Check the website!
                    </a>
                  </div>
                  <a
                    href="/static/media/works4.d20b007c.png"
                    target="blank"
                    className="project-link show-inPhone mt-2"
                  >
                    <i className="fab fa-safari fa-lg pr-2"></i>
                    Check the website!
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
