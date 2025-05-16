import {Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import {Row } from "react-bootstrap";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowWeWork = () => {
  useEffect(() => {
    gsap.fromTo(
      ".how-left-subcontainer",
      { x: "-40%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".how-container",
          start: "top 60%",
          end: "top 5%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".how-right-subcontainer",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".how-container",
          start: "top 80%",
          end: "top 25%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="how-container">
      <Container className="how-wrapper">
        <Row>
          <Col lg="6" xs="12" className="how-left-subcontainer">
            <Row className="h-100 d-flex flex-column justify-content-center ">
              <h1>HOW WE WORK</h1>
              <h3>3 SIMPLE STEPS TO PEACE OF MIND:</h3>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="d-flex flex-row justify-content-between"
                  style={{ width: "75%" }}
                >
                  <FontAwesomeIcon
                    icon={faCalendar}
                    size="2x"
                    color="var(--primary-color)"
                  ></FontAwesomeIcon>
                  <div style={{ flexBasis: "90%" }}>
                    <h4>BOOK AN APPOINTMENT</h4>
                    <p className="text-wrap">
                      Schedule an appointment with one of our licensed plumbers
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex flex-row justify-content-between"
                  style={{ width: "75%" }}
                >
                  <FontAwesomeIcon
                    icon={faHandHoldingUsd}
                    size="2x"
                    color="var(--primary-color)"
                  ></FontAwesomeIcon>
                  <div style={{ flexBasis: "90%" }}>
                    <h4>PRICING OPTIONS</h4>
                    <p className="text-wrap">
                      Our expert plumber will diagnose your issue and provide
                      upfront pricing and multiple service options
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex flex-row justify-content-between"
                  style={{ width: "75%" }}
                >
                  <FontAwesomeIcon
                    icon={faClock}
                    size="2x"
                    color="var(--primary-color)"
                  ></FontAwesomeIcon>
                  <div style={{ flexBasis: "90%" }}>
                    <h4>EXPERT SERVICE</h4>
                    <p className="text-wrap">
                      Sit back and relax as we save the day and deliver renewed
                      confidence in your home
                    </p>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
          <Col
            lg="6"
            xs="12"
            className="d-flex justify-content-start align-items-center how-right-subcontainer"
          >
            <video width="100%" controls>
              <source src="/work.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowWeWork;
